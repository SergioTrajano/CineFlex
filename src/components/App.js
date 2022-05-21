import { BrowserRouter, Routes, Route} from "react-router-dom";
import {styled } from "styled-components";
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
        time: "",
        book: {
            ids: "",
            name: "",
            cpf: ""
        }
    });

    return (
        <BrowserRouter>
            <div className="top">
                CINEFLEX
            </div>
            {(footer.URLmovie && !footer.book.ids) ? <BackButton footer={footer} setFooter={setFooter} /> : <></>}
            <Routes>
                <Route path="/" element={<Movies footer={footer} setFooter={setFooter} />} />
                <Route path="/sessoes/:movieId" element={<Sections footer={footer} setFooter={setFooter}/>} />
                <Route path="/assentos/:sectionId" element={<Seats footer={footer} setFooter={setFooter} />} />
                <Route path="/sucesso" element={<Sucess title={footer.title} weekday={footer.weekday} time={footer.time} book={footer.book} footer={footer} setFooter={setFooter} />} />
            </Routes>
            { footer.URLmovie ? <Footer URL={footer.URLmovie} title={footer.title} weekday={footer.weekday} time={footer.time} /> : <></>}
        </BrowserRouter>
    );
}
