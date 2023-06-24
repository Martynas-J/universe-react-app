import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const PlanetPage = () => {
    const [planet, setPlanet] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/planets/${id}?_embed=photos`)
            .then(res => setPlanet(res.data))
            .catch(res => toast.error(res.message))
    }, [])
    if (!planet) {
        return ""
    }
    const { name, country, birthplace, occupation, contribution, photos } = planet

    return (
        <div className="planet">
            {photos[0] ? <img className="medium-img" src={photos[0].url}></img> : ""}
            <h2 className="planet-title" > {name}</h2>

        </div>
    )
}

export default PlanetPage