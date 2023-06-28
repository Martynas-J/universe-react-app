import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { firstLetterLowerCase } from "../../Components/Functions/Functions"
import Container from "../../Components/Container/Container";
import "./DiscovererPage.scss"


const DiscovererPage = () => {
    const [discoverer, setDiscoverer] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/discoverers/${id}?_embed=photos`)
            .then(res => setDiscoverer(res.data))
            .catch(res => toast.error(res.message))
    }, [id])

    if (!discoverer) {
        return ""
    }
    const { name, country, birthplace, occupation, contribution, photos } = discoverer

    return (
        <Container>
            <div className="discoverer">
                {photos[0] ? <Link to="/gallery/discoverers"><img className="medium-img" src={photos[0].url}></img> </Link> : ""}
                <Link to={`/form/discoverer/${id}`} className="create-link discoverer-link">Edit Discoverer</Link>
                <h2 className="discoverer-title" > {name}</h2>
                <span className="item" ><span className="bold">Occupation: </span>{occupation}</span>
                <span className="item" ><span className="bold">Country: </span>{country}</span>
                <span className="item" ><span className="bold">Birthplace: </span>{birthplace}</span>
                <p>{name} {firstLetterLowerCase(contribution)}</p>
            </div>
        </Container>
    )
}

export default DiscovererPage