import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Seat from "./Seat";
import Data from "./Data";

import Gif from "../assets/Spinner-1s-200px.gif";

export default function Seats({ footer, setFooter }) {

    const { sectionId } = useParams();
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    function response(dataAPI) {
        setSeats(dataAPI.seats);
        setFooter({...footer, weekday: dataAPI.day.weekday, date: dataAPI.day.date, time: dataAPI.name});
    }

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`);
        promisse.then((r) => response(r.data));
    }, []);

    function sub(e) {
        e.preventDefault();
        const sendData = {
            ids: selected.map((i) => {return i.id}),
            compradores: data
        };
        if (selected.length !== 0) {
            setFooter({...footer, seats: selected.map((i) => {return i.name}), book: sendData});
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", sendData);
            promise.then(navigate('/sucesso'));
        }
    }

    if (seats.length === 0) {
        return (
            <Loadinng>
                <img src={Gif} alt="" />
            </Loadinng>
        );
    }

    return (
        <Screen>
            <p>Selecione o(s) assento(s)</p>
            <Place>
                {seats.map((seat, i) => <Seat key={i} id={seat.id} name={seat.name} available={seat.isAvailable} selected={selected} setSelected={setSelected} data={data} setData={setData} />)}
            </Place>
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
                <Form onSubmit={(e) => sub(e)}>
                    {data.map((item, i) => <Data key={i} id={selected[i].name} idAssento={item.idAssento} nome={item.nome} cpf={item.cpf} data={data} setData={setData} />)}
                    <button type="submit">Reservar assento(s)</button>
                </Form>
            </div>
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

const Place = styled.div`
    padding: 0 6.4vw;
    display: grid;
    grid-template-columns: repeat(10, 6.93vw);
    column-gap: 1.87vw;
    row-gap: 4.8vw;
`

const Option = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.8vh;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-size: 3.47vw;
        line-height: 4vw;
        margin: 0.8vh 0;
        color: #4E5A65;
    }
`

const SeatDiv = styled.div`
    width: 6.4vw;
    height: 6.4vw;
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
    margin: 4.68vh;
    padding: 0 6.4vw;

    input {
        width: 86.4vw;
        height: 13.6vw;
        margin-bottom: 0.8vh;
        padding-left: 4.8vw;
    }

    input::placeholder {
        color: #AFAFAF;
        font-style: italic;
        font-size: 4.8vw;
    }

    label {
        color: #293845;
        font-size: 4.8vw;
        line-height: 5.6vw;
    }

    button {
        width: 60vw;
        height: 11.2vw;
        background-color: #E8833A;
        color: #FFFFFF;
        font-size: 4.8vw;
        line-height: 5.6vw;
        align-self: center;
        margin-top: 13.3vw;
        margin-bottom: 8vw;
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