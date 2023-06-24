import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

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
    console.log(planet)
    const { name, photos, discoverer, discovererId, system, systemId, galaxy, } = planet

    return (
        <div className="planet">
            {photos[0] ? <img className="medium-img" src={photos[0].url}></img> : ""}
            <h2 className="planet-title"> {name}</h2>
            <p>
                The scientist who made the most significant contributions to the discovery is <Link to={`/discoverers/${discovererId}`}>{discoverer.name}</Link>. Earth belongs to the <Link to={`/systems/${systemId}`}>{system.name}</Link> system, which is located in the {galaxy} Galaxy.
            </p>

        </div>
    )
}

export default PlanetPage