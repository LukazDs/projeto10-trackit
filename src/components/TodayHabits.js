import HeaderPage from "./HeaderPage";
import Menu from "./Menu";
import styled from "styled-components";

function HabitToday() {

    return (
        <HabitTodayDesign>
            <div className="text-habit">
                <h3>Ler 1 capítulo de livro</h3>
                <div>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>

            </div>

            <div className="verification">
                <ion-icon name="checkmark-sharp"></ion-icon>
            </div>

        </HabitTodayDesign>
    )

}

export default function TodayHabits() {
    return (
        <Container>
            <HeaderPage />
            <InfoDay>
                <h2>Segunda, 17/05</h2>
                <span>Nenhum hábito concluído ainda</span>
            </InfoDay>
            <ContainerHabits>
                <HabitToday />
            </ContainerHabits>
            <Menu />
        </Container>

    )
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background: #F2F2F2;
    z-index: 0;
    `;

const InfoDay = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 18px;
    height: 100px;
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
    `
const ContainerHabits = styled.div`
    width: 340px;
    margin: 0 auto;
    background-color: beige;
    `
const HabitTodayDesign = styled.div`
    width: 340px;
    height: 94px;
    margin: 10px 0px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;

    .text-habit {
        width: 210px;
        height: 70px;
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h3 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;

            color: #666666;
        }
        div {
            p {
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 12.976px;
                line-height: 16px;

                color: #666666;
            }
        }
    }
    .verification {
        width: 70px;
        height: 70px;
        margin-left: 32px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        ion-icon {
            font-size: 60px;
            color: #FFFFFF;
        }
    }
`

