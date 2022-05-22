import { Link } from "react-router-dom"

export default function Movie({ id, posterURL, footer, setFooter }) {

    function saveId() {
        setFooter({...footer, IdMovie: id});
    }

    return (
        <div>
            <Link to={`/sessoes/${id}`} >
                <img onClick={saveId} src={posterURL} alt=""/>
            </Link>
        </div>
    );
}