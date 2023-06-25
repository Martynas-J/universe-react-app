import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ classes, children, url }) {
    const addedClasses = classes ? classes : '';

    return (
        url ?
            <Link className={`card ${addedClasses}`} to={url}>
                {children}
            </Link>
            : <div className={`card ${addedClasses}`}>{ children }</div>
    )
}

export default Card;