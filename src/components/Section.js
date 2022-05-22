import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Section({ weekday, date, showtimes, }) {
    
    return (
        <Day>
            <p>
                {weekday} - {date}
            </p>
            <div>
                {showtimes.map((time) => 
                    <Link key={time.id} to={`/assentos/${time.id}`}>
                        <div>{time.name}</div>
                    </Link>
                )}
            </div>
        </Day>
    );
}

const Day = styled.div`
    width: 100%;
    margin-bottom: 5.3vw;
    padding: 0 6.7vw;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;

    p {
        font-size: 5.3vw;
        line-height: 6.13vw;
        color: #293845;
        margin-bottom: 5.3vw;
        text-decoration: none;
    }

    > div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 22.13vw);
        column-gap: 2.13vw;
        row-gap: 2.13vw;
        text-decoration: none;
    }

    > div div {
        width: 22.13vw;
        height: 11.6vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E8833A;
        font-size: 4.8vw;
        line-height: 5.6vw;
        color: #FFFFFF;
        text-decoration: none;
    }

    a {
        text-decoration: none;
    }
`