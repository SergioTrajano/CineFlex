import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sucess( { title, weekday, time, book, setFooter }) {

    const navigate = useNavigate();

    function goBack(e) {
        e.preventDefault();
        setFooter({});
        navigate("/");
    }

    return (
        <>
            <div className="screen">
                <p>Pedido feito com sucesso!</p>
                <Description>
                    <p>Filme e sessão</p>
                    <p>{title}</p>
                    <p>{weekday} - {time}</p>
                </Description>
                <Description>
                    <p>Ingressos</p>
                    {book.ids.map((item, i) => <p key={i}>Assento {item}</p>)}
                </Description>
                <Description>
                    <p>Comprador</p>
                    <p>Nome: {book.name}</p>
                    <p>CPF: {book.cpf}</p>
                </Description>
                <Button onClick={(e) => goBack(e)}>Voltar pra Home</Button>
            </div>
        </>
    );
}

const Description = styled.div`
    width: 100%;
    margin-bottom: 15px;
    margin-left: 30px;

    p:first-child {
        font-size: 24px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: 8px;
        margin-top: 15px;
    }

    p {
        font-size: 22px;
        line-height: 25px;
        color: #293845;
        margin: 1px;
    }

`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    margin-top: 50px;
    margin-bottom: 20px;
`