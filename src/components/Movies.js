import axios from "axios";
import { useEffect, useState } from "react";

import Movie from "./Movie";

export default function Movies({ footer, setFooter }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((response) => setMovies(response.data));
    }, []);
    

    return (
        <div className="screen">
            <p>Selecione o filme</p>
            <div className="movies"> 
                {movies.map( (movie) => <Movie key={movie.id} id={movie.id} posterURL={movie.posterURL} footer={footer} setFooter={setFooter} />)}
            </div>
        </div>
    );
}
