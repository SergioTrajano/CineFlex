import { BrowserRouter, Routes, Route} from "react-router-dom";
import {styled } from "styled-components";

import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";

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
                <Route path="/filme/:movieId" element={<Sections />} />
                <Route path="/sessao/:sessaoId" element={<Seats />} />
            </Routes>
        </BrowserRouter>
    );
}
