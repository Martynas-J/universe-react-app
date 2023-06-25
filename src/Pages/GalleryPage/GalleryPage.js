import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
    <div className="stars-photos">
      <h2>Stars</h2>
      {stars.map(star =>
        <Link key={star.id} to="./stars">
          <img className="medium-img" src={star.thumbnailUrl}></img>
        </Link>)}
    </div> : ""
  const discoverersPhotosElement = discoverers.length > 0 ?
    <div className="discoverers-photos">
      <h2>Discoverers</h2>
      {discoverers.map(discoverer =>
        <Link key={discoverer.id} to="./discoverers" >
          <img className="medium-img" src={discoverer.thumbnailUrl}></img>
        </Link>)}
    </div> : ""
  const planetsPhotosElement = planets.length > 0 ?
    <div className="planets-photos">
      <h2>Planets</h2>
      {planets.map(planet => <Link key={planet.id} to="./planets">
        <img className="medium-img" key={planet.id} src={planet.thumbnailUrl}></img>
      </Link>)}
    </div> : ""
  const systemsPhotosElement = systems.length > 0 ?
    <div className="systems-photos">
      <h2>Systems</h2>
      {systems.map(system => <Link key={system.id} to="./systems">
        <img className="medium-img" key={system.id} src={system.thumbnailUrl}></img>
      </Link>)}
    </div> : ""

  return (
    <div className="gallery-wrapper">
      <h1 className="page-title">Gallery</h1>
      {photos.length > 0 ?
        <>
          {starsPhotosElement}
          {discoverersPhotosElement}
          {planetsPhotosElement}
          {systemsPhotosElement}
        </>
        : "No Photos"}

    </div>
  )
}

export default GalleryPage