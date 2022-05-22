import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sucess( { footer, setFooter }) {

    const navigate = useNavigate();

    function goBack(e) {
        e.preventDefault();
        setFooter({
            IdMovie: "",
            URLmovie: "",
            title: "",
            weekday: "",
            date: "",
            time: "",
            seats: [],
            book: {
                ids: [],
                compradores: []
            }
        });
        navigate("/");
    }

    return (
        <>
            <Screen>
                <p>Pedido feito com sucesso!</p>
                <Description>
                    <p>Filme e sessão</p>
                    <p>{footer.title}</p>
                    <p>{footer.date} {footer.time}</p>
                </Description>
                <Description>
                    <p>Ingressos</p>
                    {footer.seats.map((item, i) => <p key={i}>Assento {item}</p>)}
                </Description>
                <Description>
                    <p>Compradores</p>
                    {footer.book.compradores.map((person, i) => 
                    <div key={i}>
                        <p>Nome: {person.nome}</p>
                        <p>CPF: {person.cpf}</p>
                    </div>)}
                </Description>
                <Button onClick={(e) => goBack(e)}>Voltar pra Home</Button>
            </Screen>
        </>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 17.86vw;
    margin-bottom: 10px;

    p {
    margin: 4.93vw 0;
    font-size: 6.4vw;
    line-height: 7.47vw;
    color: #247A6B;
    }
`

const Description = styled.div`
    width: 100%;
    margin-bottom: 15px;
    margin-left: 8vw;

    > p:first-child {
        font-size: 6,4vw;
        line-height: 7.47vw;
        font-weight: bold;
        margin-bottom: 8px;
        margin-top: 15px;
    }

    p {
        font-size: 5.87vw;
        line-height: 6.67vw;
        color: #293845;
        margin: 1px;
    }

    div {
        margin-bottom: 8px;
    }

`

const Button = styled.button`
    width: 60vw;
    height: 11.2vw;
    background-color: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 4.8vw;
    line-height: 5.6vw;
    margin-top: 50px;
`