import { Link } from "react-router-dom"

export default function Movie({ id, title, posterURL, overviwe, release }) {

    return (
        <div className="movie">
            <Link to={`/filme/${id}`}>
                <img src={posterURL} alt=""/>
            </Link>
        </div>
    );
}