import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Section from "./Section";

export default function Sections({ footer, setFooter }) {

    const { movieId } = useParams();
    const [days, setDays] = useState([]);

    function response(r) {
        setDays(r.data.days);
        setFooter({...footer, URLmovie: r.data.posterURL, title: r.data.title});
    }

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promisse.then((r) => response(r));
    }, []);

    return (
        <div className="screen">
            <p>Selecione o horário</p>
                {days.map((day) => <Section key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)}
        </div>
    );
}