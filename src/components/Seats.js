import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Seat from "./Seat";

export default function Seats({ footer, setFooter }) {

    const { sectionId } = useParams();
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    let navigate = useNavigate();

    function response(data) {
        setSeats(data.seats);
        setFooter({...footer, weekday: data.day.weekday, time: data.name});
    }

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`);
        promisse.then((r) => response(r.data));
    }, []);

    function book(e) {
        e.preventDefault();
        const book = {
            ids: selected,
            name,
            cpf
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", book);
        promise.then(() => navigate('/sucesso'));
    }

    return (
        <div className="screen">
            <p>Selecione o(s) assento(s)</p>
            <div className="seats">
                {seats.map((seat, i) => <Seat key={i} id={seat.id} name={seat.name} available={seat.isAvailable} selected={selected} setSelected={setSelected} />)}
            </div>
            <Option>
                <div>
                    <SeatDiv color={"#8DD7CF"} border={"#1AAE9E"} ></SeatDiv>
                    <p>Selecionado</p>
                </div>
                <div>
                    <SeatDiv color={"#C3CFD9"} border={"#7B8B99"} ></SeatDiv>
                    <p>Disponível</p>
                </div>
                <div>
                    <SeatDiv color={"#FBE192"} border={"#F7C52B"} ></SeatDiv>
                    <p>Indisponível</p>
                </div>
            </Option>
            <div className="dados">
                <Form onSubmit={(e) => book(e)}>
                    <label htmlFor="NameId">Nome do Comprador:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..." id="NameId" required></input>
                    <label htmlFor="CpfId">CPF do Comprador:</label>
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu nome..." id="CpfId" required></input>
                    <button type="submit">Reservar assento(s)</button>
                </Form>
            </div>
        </div>
    );
}

const Option = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-size: 13px;
        line-height: 15px;
        margin: 7px 0;
        color: #4E5A65;
    }
`

const SeatDiv = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: solid 1px ${props => props.border};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 41px 24px 0 24px;

    input {
        width: 324px;
        height: 51px;
        margin-bottom: 7px;
        padding-left: 18px;
    }

    input::placeholder {
        color: #AFAFAF;
        font-style: italic;
        font-size: 18px;
    }

    label {
        color: #293845;
        font-size: 18px;
        line-height: 21px;
    }

    button {
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 21px;
        align-self: center;
        margin-top: 50px;
        margin-bottom: 30px;
    }
`