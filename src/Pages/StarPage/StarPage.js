import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

const StarPage = () => {
    const [star, setStar] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/stars/${id}?_expand=discoverer&_expand=system`)
            .then(res => setStar(res.data))
            .catch(res => toast.error(res.message))
    }, [])
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
    if (system) {
        const starText = system.stars.length > 1 ? "stars" : "star"
        systemElement =
            <>
                {" " + name} belongs to the <Link to={`/systems/${systemId}`}>{system.name}</Link> ({system.stars.length} {starText}) system.
            </>
    }
    const galaxyElement = galaxy ? ` A particle of the universe is located in the ${galaxy} Galaxy.` : ""
    const galaxyGroupElement = galaxyGroup ? ` ${name} is located in the ${galaxyGroup} galaxy group.` : ""

    return (
        <div className="star">
            <h2 className="star-title"> {name}</h2>
            <p>
                {discovererElement}
                {systemElement}
                {galaxyElement}
                {galaxyGroupElement}
            </p>
        </div>
    )
}

export default StarPage