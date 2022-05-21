import { BrowserRouter, Routes, Route} from "react-router-dom";
import {styled } from "styled-components";

import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";
import Sucess from "./Sucess";

import "../css/reset.css";
import "../css/style.css";


export default function App() {
    return (
        <BrowserRouter>
            <div className="top">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:movieId" element={<Sections />} />
                <Route path="/assentos/:sectionId" element={<Seats />} />
                <Route path="/sucesso" element={<Sucess />} />
            </Routes>
        </BrowserRouter>
    );
}
