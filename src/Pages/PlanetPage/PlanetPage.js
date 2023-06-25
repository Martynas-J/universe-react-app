import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";

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
        satellitesText = ` natural satellites are  ${satellites.join(", ")}`
    } else if (satellites.length === 1) {
        satellitesText = ` natural satellite is  ${satellites[0]}`
    }

    return (
        <Container>
            <div className="planet">
                {photos[0] ? <img className="medium-img" src={photos[0].url}></img> : ""}
                <h2 className="planet-title"> {name}</h2>
                <p>
                    The scientist who made the most significant contributions to the discovery is <Link to={`/discoverers/${discovererId}`}>{discoverer.name} {discoverer.occupation}</Link>. {name} belongs to the <Link to={`/systems/${systemId}`}>{system.name}</Link> ({system.stars.length} {starText}) system, which is located in the {galaxy} Galaxy. {name} {satellitesText}.
                </p>
            </div>
        </Container>

    )
}

export default PlanetPage