import { Link } from "react-router-dom";

export default function Section({ weekday, date, showtimes, }) {
    return (
        <div className="section">
            <p>
                {weekday} - {date}
            </p>
            <div className="buttons">
                {showtimes.map((time) => 
                    <Link key={time.id} to={`/sessao/${time.id}`}>
                        <div className="button">{time.name}</div>
                    </Link>
                )}
            </div>
        </div>
    );
}