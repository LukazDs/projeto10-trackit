import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";

export default function HistoryPage() {
    return (
        <Container>
            <Header />
            <HistoryDesign>
                <h2>
                    Histórico
                </h2>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>

            </HistoryDesign>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
    height: 597px;
    background: #F2F2F2;
    z-index: 0;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    `;

const HistoryDesign = styled.div`
    width: 338px;
    height: 138px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
    ` 