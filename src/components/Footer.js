import styled from "styled-components";

export default function Footer({ URL, title, weekday, time }) {

        const description = `${weekday} - ${time}`;

        return (
            <FooterDiv>
                <Frame>
                    <img src={URL} alt=""></img>
                </Frame>
                <div>
                    <p>{title}</p>
                    <p>{time ? description : ""}</p>
                </div>
            </FooterDiv>
        );
}

const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 31.2vw;
    background-color: #DFE6ED;
    border: solid 1px #9EADBA;
    display: flex;
    align-items: center;
    padding: 1.6vh 2.67vw;

    p {
        font-size: 6.93vw;
        line-height: 8vw;
        color: #293845;
    }
`

const Frame = styled.div`
    width: 17.07vw;
    height: 23.74vw;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    padding: 8px;
    margin-right: 3.73vw;
    background-color: #FFFFFF;

    img {
        width: 100%;
        height: 100%;
    }

`