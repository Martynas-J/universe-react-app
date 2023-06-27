import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";

const SystemPage = () => {
    const [system, setSystem] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/systems/${id}`)
            .then(res => setSystem(res.data))
            .catch(res => toast.error(res.message))
    }, [])
    if (!system) {
        return ""
    }

    const { name, galaxy, galaxyGroup, planets, stars } = system

    let planetsText = ""
    let starsText = ""

    if (planets.length > 1) {
        planetsText = "Planets: "
    } else if (planets.length === 1) {
        planetsText = "Planet: "
    }

    if (stars.length > 1) {
        starsText = "Stars: "
    } else if (stars.length === 1) {
        starsText = "Star: "
    }
    return (
        <Container>
            <div className="system">
                <h2 className="system-title"> {name}</h2>
                <ul>
                    {planets ? <li><span className="bold">{planetsText}</span>{planets}</li> : ""}
                    {stars ? <li><span className="bold">{starsText}</span>{stars}</li> : ""}
                    <li><span className="bold">Galaxy: </span>{galaxy ? galaxy : ""}</li>
                    <li><span className="bold">Galaxy Group: </span>{galaxyGroup ? galaxyGroup : ""}</li>
                </ul>
                <Link to={`/form/system/${id}`} className="create-link">Edit System</Link>
            </div>
        </Container>

    )
}

export default SystemPage