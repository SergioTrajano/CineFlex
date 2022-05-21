import { BrowserRouter, Routes, Route} from "react-router-dom";
import {styled } from "styled-components";
import { useState } from "react";

import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";
import Sucess from "./Sucess";
import Footer from "./Footer";

import "../css/reset.css";
import "../css/style.css";


export default function App() {

    const [footer, setFooter] = useState( {
        URLmovie: "",
        title: "",
        weekday: "",
        time: "",
        book: {}
    });

    return (
        <BrowserRouter>
            <div className="top">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:movieId" element={<Sections footer={footer} setFooter={setFooter}/>} />
                <Route path="/assentos/:sectionId" element={<Seats footer={footer} setFooter={setFooter} />} />
                <Route path="/sucesso" element={<Sucess title={footer.title} weekday={footer.weekday} time={footer.time} book={footer.book} footer={footer} setFooter={setFooter} />} />
            </Routes>
            <Footer URL={footer.URLmovie} title={footer.title} weekday={footer.weekday} time={footer.time} />
        </BrowserRouter>
    );
}
