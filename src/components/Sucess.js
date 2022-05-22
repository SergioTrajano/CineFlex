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
    margin-top: 67px;
    margin-bottom: 117px;

    p {
    margin: 18.5px 0;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    }
`

const Description = styled.div`
    width: 100%;
    margin-bottom: 15px;
    margin-left: 30px;

    > p:first-child {
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

    div {
        margin-bottom: 8px;
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