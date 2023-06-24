import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { firstLetterLowerCase } from "../../Components/Functions/Functions"


const DiscovererPage = () => {
    const [discoverer, setDiscoverer] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/discoverers/${id}?_embed=photos`)
            .then(res => setDiscoverer(res.data))
            .catch(res => toast.error(res.message))
    }, [])
    if (!discoverer) {
        return ""
    }
    const { name, country, birthplace, occupation, contribution, photos } = discoverer

    return (
        <div className="discoverer">
            {photos[0] ? <img className="medium-img" src={photos[0].url}></img> : ""}
            <h2 className="discoverer-title" > {name}</h2>
            <span><span>Occupation: </span>{occupation}</span>
            <span><span>Country: </span>{country}</span>
            <span><span>Birthplace: </span>{birthplace}</span>
            <p>{name} {firstLetterLowerCase(contribution)}</p>
        </div>
    )
}

export default DiscovererPage