import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackButton({ footer, setFooter }) {

    const navigate = useNavigate();

    function goBack() {
        if (footer.weekday) {
            setFooter({...footer, weekday: "", time: ""});
            navigate(`/sessoes/${footer.IdMovie}`);
        }  else {
            setFooter({...footer, IdMovie: "", URLmovie: ""});
            navigate("/");
        }
    }

    return (
        <Button onClick={goBack}>
            Voltar
        </Button>
    );
}

const Button = styled.button`
    width: 17vw;
    height: 10vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CED9;
    font-size: 4.8vw;
    line-height: 5.6vw;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
`