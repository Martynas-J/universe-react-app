import { Link } from "react-router-dom";

const StarItem = ({star}) => {
    const { name, id, system, systemId  } = star

    return (
        <div className="star-item">
            <Link to={`./${id}`}><h2>{name}</h2></Link>
            <Link to={`/systems/${systemId}`}><span>({system} system)</span></Link>
        </div>
    )
}

export default StarItem