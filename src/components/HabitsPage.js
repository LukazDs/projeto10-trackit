import HeaderPage from "./HeaderPage";
import Menu from "./Menu";
import CreatedHabit from "./CreatedHabit";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Habits from "./ListHabits";

export default function HabitsPage() {

    const { token, setListHabits, listHabits } = useContext(UserContext)
    const tokenID = !token ? localStorage.getItem("token") : token
    const [create, setCreate] = useState(false)


    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {headers : {"Authorization": `Bearer ${tokenID}`}};
        const promise = axios.get(URL, config);
        promise.then(res => setListHabits(res.data))
    }, [])

    return (
        <Container>
            <HeaderPage />
            <MakeNewHabit>
                <span>Meus hábitos</span>
                <div onClick={() => setCreate(true)}><p>+</p></div>
            </MakeNewHabit>

            {create ? <CreatedHabit setCreate={setCreate} token={tokenID}/> : ""}

            {listHabits.length === 0 ?
                <NoHabits>
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                </NoHabits> : <Habits />}
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

const MakeNewHabit = styled.div`
    width: 375px;
    height: 85px;
    margin-top: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    div {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: #52B6FF;
        border-radius: 10px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`
const NoHabits = styled.div`
    width: 338px;
    height: 74px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    word-break: break-word;
    ` 