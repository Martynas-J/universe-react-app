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
    }, [id])

    if (!planet) {
        return ""
    }

    const { name, photos, discoverer, discovererId, system, systemId, galaxy, satellites } = planet
    let starsElement = ""
    let satellitesText = "has no satellites"

    if (system.stars.length > 0) {
        const starsNr = system.stars.split(",").length
        starsElement = starsNr > 1 ? `(${starsNr} Stars)` : `(${starsNr} Star)`
    }

    if (satellites.length > 0) {
        const satellitesNr = satellites.split(",").length
        satellitesText = satellitesNr > 1 ? ` satellites are ${satellites}` : ` satellite is ${satellites}`
    }

    return (
        <Container>
            <div className="planet">
                <Link to="/gallery/planets"><img className="medium-img" src={photos[0] ? photos[0].url : PLANET_IMG_URL}></img> </Link>
                <Link to={`/form/planet/${id}`} className="create-link">Edit Planet</Link>
                <h2 className="planet-title"> {name}</h2>
                <p className="planet-content">
                    The scientist who made the most significant contributions to the discovery is <Link to={`/discoverers/${discovererId}`}>{discoverer.name} {discoverer.occupation}</Link>. {name} belongs to the <Link to={`/systems/${systemId}`}>{system.name}</Link> {starsElement} system, which is located in the {galaxy} Galaxy. {name} {satellitesText}.
                </p>
            </div>
        </Container>

    )
}

export default PlanetPage