import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ classes, children, url }) {
    const addedClasses = classes ? classes : '';
    return (
        <Link className={`card ${addedClasses}`} to={url}>
            {children}
        </Link>
    )
}

export default Card;