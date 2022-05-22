import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Movie from "./Movie";

import Gif from "../assets/Spinner-1s-200px.gif";

export default function Movies({ footer, setFooter }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((response) => setMovies(response.data));
    }, []);
    
    if (movies.length === 0) {
        return (
            <Loadinng>
                <img src={Gif} alt="" />
            </Loadinng>
        );
    }

    return (
        <Screen>
            <p>Selecione o filme</p>
            <Catalog> 
                {movies.map( (movie) => <Movie key={movie.id} id={movie.id} posterURL={movie.posterURL} footer={footer} setFooter={setFooter} />)}
            </Catalog>
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 17.87vw;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;

    p {
        margin: 4.92vw 0;
        font-size: 6.4vw;
        line-height: 7.45vw;
        color: #293845;
    }
`

const Catalog = styled.div`
    display: grid;
    grid-template-columns: 38.7vw 38.7vw;
    row-gap: 10px;
    column-gap: 8vw;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;

    div {
        width: 38.7vw;
        height: 55.78vw;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px #0000001A;
        padding: 8px;
    }

    div img {
        width: 100%;
        height: 100%;
    }

`
const Loadinng = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 17.87vw;
    margin-bottom: 31.2vw;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
`
