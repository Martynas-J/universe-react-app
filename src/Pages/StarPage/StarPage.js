import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import "./StarPage.scss"

const StarPage = () => {
    const [star, setStar] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/stars/${id}?_expand=discoverer&_expand=system`)
            .then(res => setStar(res.data))
            .catch(res => toast.error(res.message))
    }, [id])

    if (!star) {
        return ""
    }
    const { name, discoverer, discovererId, system, systemId, galaxy, galaxyGroup } = star

    const discovererElement = discoverer ?
        <>
            One of the most notable figures in {name} exploration is <Link to={`/discoverers/${discovererId}`}>{discoverer.name} {discoverer.occupation}.</Link>
        </>
        : "No information about discoverer."

    let systemElement = " No information about system."
    let starsElement =""
    if (system) {
        if (system.stars.length > 0) {
            const starsNr = system.stars.split(",").length
            starsElement = starsNr > 1 ? `(${starsNr} Stars)` : `(${starsNr} Star)`
        }
        systemElement =
            <>
                {" " + name} belongs to the <Link to={`/systems/${systemId}`}>{system.name}</Link> {starsElement} system.
            </>
    }
    const galaxyElement = galaxy ? ` A particle of the universe is located in the ${galaxy} Galaxy.` : ""
    const galaxyGroupElement = galaxyGroup ? ` ${name} is located in the ${galaxyGroup} galaxy group.` : ""

    return (
        <Container>
            <div className="star">
                <h2 className="star-title"> {name}</h2>

                <p>
                    {discovererElement}
                    {systemElement}
                    {galaxyElement}
                    {galaxyGroupElement}
                </p>
                <Link to={`/form/star/${id}`} className="create-link">Edit Star</Link>
            </div>
        </Container>

    )
}

export default StarPage