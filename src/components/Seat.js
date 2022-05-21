import styled from "styled-components";
import { useState } from "react";

function select (color, isAvaliable, setColor, setBorder, id, selected, setSelected) {
    if (isAvaliable) {
        if (color === "#C3CFD9") {
            setColor("#8DD7CF");
            setBorder("#45BDB0");
            setSelected([...selected, id].sort());
        } else {
            setColor("#C3CFD9");
            setBorder("#808F9D");
            setSelected(selected.filter((i) => id !== i));

        }
    } else {
        alert("Esse assento não está disponível");
    }
}

export default function Seat({ id, name, available, selected, setSelected }) {

    const [color, setColor] = useState(available ? "#C3CFD9" : "#FBE192");
    const [border, setBorder] = useState(available ? "#808F9D" : "#F7C52B")

    return (
        <SeatDiv onClick={() => select(color, available, setColor, setBorder, id, selected, setSelected)} color={color} border={border} >
            { name }
        </SeatDiv>
    );
}

const SeatDiv = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: solid 1px ${props => props.border};
    color: #000000;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`