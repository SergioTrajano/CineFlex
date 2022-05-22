import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Section from "./Section";

import Gif from "../assets/Spinner-1s-200px.gif";

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

    if (days.length === 0) {
        return (
            <Loadinng>
                <img src={Gif} alt="" />
            </Loadinng>
        );
    }

    return (
        <Screen>
            <p>Selecione o horário</p>
                {days.map((day) => <Section key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)}
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 17.87vw;
    margin-bottom: 31.2vw;

    p {
        margin: 4.92vw 0;
        font-size: 6.4vw;
        line-height: 7.45vw;
        color: #293845;
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
`