import styled from "styled-components";
import { useState } from "react";

function select (name, color, isAvaliable, setColor, setBorder, id, selected, setSelected, data, setData) {
    if (isAvaliable) {
        if (color === "#C3CFD9") {
            setColor("#8DD7CF");
            setBorder("#45BDB0");
            setSelected([...selected, {
                id,
                name
            }].sort( (a, b) => {
                return a.id - b.id;
            }));
            setData([...data, {
                idAssento: id,
                nome: "",
                cpf: ""
            }].sort((a, b) => {
                return a.idAssento - b.idAssento;
            }));
        } else {
            if (window.confirm("Ao remover o assento os dados relacionados a ele serão perdidos!")) {
            setColor("#C3CFD9");
            setBorder("#808F9D");
            setSelected(selected.filter((i) => id !== i.id));
            setData(data.filter((item) => item.idAssento !== id));
            }
        }
    } else {
        alert("Esse assento não está disponível");
    }
}

export default function Seat({ id, name, available, selected, setSelected, data, setData }) {

    const [color, setColor] = useState(available ? "#C3CFD9" : "#FBE192");
    const [border, setBorder] = useState(available ? "#808F9D" : "#F7C52B")

    return (
        <SeatDiv onClick={() => select(name, color, available, setColor, setBorder, id, selected, setSelected, data, setData)} color={color} border={border} >
            { name }
        </SeatDiv>
    );
}

const SeatDiv = styled.div`
    width: 6.93vw;
    height: 6.93vw;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: solid 1px ${props => props.border};
    color: #000000;
    font-size: 2.93vw;
    line-height: 3.47vw;
    display: flex;
    justify-content: center;
    align-items: center;
`