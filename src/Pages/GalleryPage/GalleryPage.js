import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import "./GalleryPage.scss"

const GalleryPage = () => {
  const [photos, setPhotos] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/photos`)
      .then(res => setPhotos(res.data))
      .catch(res => toast.error(res.message))
  }, [])

  if (!photos) {
    return ""
  }
  const stars = photos.filter(photo => photo.category === "stars").slice(0, 5)
  const discoverers = photos.filter(photo => photo.category === "discoverers").slice(0, 5)
  const planets = photos.filter(photo => photo.category === "planets").slice(0, 5)
  const systems = photos.filter(photo => photo.category === "systems").slice(0, 5)


  const starsPhotosElement = stars.length > 0 ?
    stars.map(star =>
      <Link key={star.id} to="./stars">
        <img className="medium-img" src={star.thumbnailUrl} />
      </Link>)
    : <span className="empty-text">Is empty, <Link to="./stars">click here to add</Link></span>
  const discoverersPhotosElement = discoverers.length > 0 ?
    discoverers.map(discoverer =>
      <Link key={discoverer.id} to="./discoverers" >
        <img className="medium-img" src={discoverer.thumbnailUrl} />
      </Link>)
    : <span className="empty-text">Is empty, <Link to="./discoverers">click here to add</Link></span>
  const planetsPhotosElement = planets.length > 0 ?

    planets.map(planet =>
      <Link key={planet.id} to="./planets">
        <img className="medium-img" key={planet.id} src={planet.thumbnailUrl} />
      </Link>)
    : <span className="empty-text">Is empty, <Link to="./planets">click here to add</Link></span>

  const systemsPhotosElement = systems.length > 0 ?
    systems.map(system =>
      <Link key={system.id} to="./systems">
        <img className="medium-img" key={system.id} src={system.thumbnailUrl} />
      </Link>)
    : <span className="empty-text">Is empty, <Link to="./systems">click here to add</Link></span>

  return (
    <Container>
      <div className="gallery-wrapper">
        <h1 className="page-title">Gallery</h1>
        <div className="photos-wrapper">
          <h2 className="photos-title">Stars</h2>
          <div className="photos">{starsPhotosElement}</div>
        </div>
        <div className="photos-wrapper">
          <h2 className="photos-title">Discoverers</h2>
          <div className="photos">{discoverersPhotosElement}</div>
        </div>
        <div className="photos-wrapper">
          <h2 className="photos-title">Planets</h2>
          <div className="photos">{planetsPhotosElement}</div>
        </div>
        <div className="photos-wrapper">
          <h2 className="photos-title">Systems</h2>
          <div className="photos">{systemsPhotosElement}</div>
        </div>
      </div>
    </Container>
  )
}

export default GalleryPage