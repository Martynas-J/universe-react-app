import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, PLANET_IMG_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import "./PlanetPage.scss"

const PlanetPage = () => {
    const [planet, setPlanet] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/planets/${id}?_expand=discoverer&_expand=system&_embed=photos`)
            .then(res => setPlanet(res.data))
            .catch(res => toast.error(res.message))
    }, [])
    if (!planet) {
        return ""
    }

    const { name, photos, discoverer, discovererId, system, systemId, galaxy, satellites } = planet
    const starText = system.stars.length > 1 ? "stars" : "star"
    let satellitesText = "has no satellites"
    if (satellites.length > 1) {
        satellitesText = ` natural satellites are  ${satellites}`
    } else if (satellites.length === 1) {
        satellitesText = ` natural satellite is  ${satellites[0]}`
    }

    return (
        <Container>
            <div className="planet">
                <Link to="/gallery/planets"><img className="medium-img" src={photos[0] ? photos[0].url : PLANET_IMG_URL}></img> </Link>
                <Link to={`/form/planet/${id}`} className="create-link">Edit Planet</Link>
                <h2 className="planet-title"> {name}</h2>
                <p className="planet-content">
                    The scientist who made the most significant contributions to the discovery is <Link to={`/discoverers/${discovererId}`}>{discoverer.name} {discoverer.occupation}</Link>. {name} belongs to the <Link to={`/systems/${systemId}`}>{system.name}</Link> ({system.stars.length} {starText}) system, which is located in the {galaxy} Galaxy. {name} {satellitesText}.
                </p>
            </div>
        </Container>

    )
}

export default PlanetPage