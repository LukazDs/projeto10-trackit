import HeaderPage from "./HeaderPage";
import Menu from "./Menu";
import styled from "styled-components";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

function HabitToday({ setPercentage, token, name, nowSeq, done, id, highSeq, listTodayHabits, setListTodayHabits }) {

    function markHabit() {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const config = { headers: { "Authorization": `Bearer ${token}` } }
        const promise = axios.post(URL, {}, config)
        promise.then(() => { getDate() })
    }

    function uncheckHabit() {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const config = { headers: { "Authorization": `Bearer ${token}` } }
        const promise = axios.post(URL, {}, config)
        promise.then(() => { getDate() })
    }

    function getDate() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = { headers: { "Authorization": `Bearer ${token}` } };
        const promise = axios.get(URL, config);
        promise.then(res => { setListTodayHabits(res.data); setPercentage((listTodayHabits.filter(v => v.done).length / listTodayHabits.length) * 100) })
    }

    return (
        <HabitTodayDesign>
            <div className="text-habit">
                <h3>{name}</h3>
                <div>
                    <p>Sequência atual: <span style={{ color: `${done ? "#8FC549" : "#666666"}` }}>{nowSeq} dias</span></p>
                    <p>Seu recorde: <span style={{ color: `${nowSeq !== 0 && nowSeq === highSeq ? "#8FC549" : "#666666"}` }}>{highSeq} dias</span></p>
                </div>
            </div>
            <div
                onClick={(!done) ? markHabit : uncheckHabit}
                className="verification"
                style={{ background: `${!done ? "#EBEBEB" : "#8FC549"}` }}>
                <ion-icon name="checkmark-sharp"></ion-icon>
            </div>
        </HabitTodayDesign>
    )

}

export default function TodayHabits() {

    const [listTodayHabits, setListTodayHabits] = useState([])
    const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const day = week[dayjs().day()]
    const { token, percentage, setPercentage } = useContext(UserContext)
    const tokenID = !token ? localStorage.getItem("token") : token
    setPercentage((listTodayHabits.filter(v => v.done).length / listTodayHabits.length)*100)

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = { headers: { "Authorization": `Bearer ${tokenID}` } }
        const promise = axios.get(URL, config)
        promise.then((res) => setListTodayHabits(res.data))
    }, [])

    return (
        <Container>
            <HeaderPage />
            <InfoDay>
                <h2>{day}, {dayjs().format("DD/MM")}</h2>
                {percentage === 0 ? <span>Nenhum hábito concluído ainda</span> : <span style={{ color: "#8FC549" }}>{percentage.toFixed(0)}% dos hábitos concluídos</span>}
            </InfoDay>
            <ContainerHabits>
                {listTodayHabits.map((v, i) =>
                    <HabitToday
                        setPercentage={setPercentage}
                        listTodayHabits={listTodayHabits}
                        setListTodayHabits={setListTodayHabits}
                        id={v.id}
                        token={tokenID}
                        done={v.done}
                        nowSeq={v.currentSequence}
                        highSeq={v.highestSequence}
                        name={v.name}
                        key={i} />
                )}
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
        cursor: pointer;
        ion-icon {
            font-size: 60px;
            color: #FFFFFF;
        }
    }
`

