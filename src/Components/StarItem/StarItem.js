import { Link } from "react-router-dom";
import Card from "../Card/Card";

const StarItem = ({ star }) => {
    const { name, id, system, systemId } = star

    return (
        <Card url={`./${id}`}>
            <h2>{name}</h2>
            <Link to={`/systems/${systemId}`}><span>({system} system)</span></Link>
        </Card>
    )
}

export default StarItem