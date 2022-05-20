import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seats() {

    const { sessaoId } = useParams();
    const [seats, setSeats] = useState();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promisse.then(response => console.log(response.data));
    }, []);



    return (
        <div className="screen">
            <p>Selecione o(s) assento(s)</p>

        </div>
    );
}