import { BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";
import Sucess from "./Sucess";
import Footer from "./Footer";
import BackButton from "./BackButton";

import "../css/reset.css";
import "../css/style.css";


export default function App() {

    const [footer, setFooter] = useState( {
        IdMovie: "",
        URLmovie: "",
        title: "",
        weekday: "",
        date: "",
        time: "",
        seats: [],
        book: {
            ids: [],
            compradores: []
        }
    });

    return (
        <BrowserRouter>
            <Top>
                CINEFLEX
            </Top>
            { (footer.URLmovie && !footer.seats.length) ? <BackButton footer={footer} setFooter={setFooter} /> : <></>}
            <Routes>
                <Route path="/" element={<Movies footer={footer} setFooter={setFooter} />} />
                <Route path="/sessoes/:movieId" element={<Sections footer={footer} setFooter={setFooter}/>} />
                <Route path="/assentos/:sectionId" element={<Seats footer={footer} setFooter={setFooter} />} />
                <Route path="/sucesso" element={<Sucess footer={footer} setFooter={setFooter} />} />
            </Routes>
            { (footer.URLmovie && !footer.seats.length) ? <Footer URL={footer.URLmovie} title={footer.title} weekday={footer.weekday} time={footer.time} /> : <></>}
        </BrowserRouter>
    );
}

const Top = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    position: fixed;
    top: 0;
    left: 0;
`
