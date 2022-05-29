import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

function Habit({ id, name, token, setListHabits }) {

    const tokenID = !token ? localStorage.getItem("token") : token


    function getDate() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = { headers: { "Authorization": `Bearer ${tokenID}` } };
        const promise = axios.get(URL, config);
        promise.then(res => setListHabits(res.data))
    }

    console.log(tokenID)

    function confirmDelete() {
        const toDelete = window.confirm("deletar?")
        if(toDelete) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            const config = { headers: { "Authorization": `Bearer ${tokenID}` } }; 
            const promise = axios.delete(URL, config)
            promise.then(() => getDate())
        }
    }

    function Days() {
        return ["D", "S", "T", "Q", "Q", "S", "S"]
    }
    return (
        <HabitDesign id={id}>
            <div className="topo">
                <span>{name}</span>
                <ion-icon onClick={confirmDelete} name="trash-outline"></ion-icon>
            </div>
            <div className="days">
                {Days().map((v, i) => <Day key={i}>{v}</Day>)}
            </div>
        </HabitDesign>
    )

}


export default function Habits() {

    const { listHabits, token, setListHabits } = useContext(UserContext)

    return listHabits.map((v, i) =>
        <Habit setListHabits={setListHabits} token={token} key={i} id={v.id} name={v.name} />
    )
}

const HabitDesign = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 18px;

   
    .topo {
        span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin: 10px;

        color: #666666;
        }
        ion-icon {
            cursor: pointer;
            font-size: 13px;
            color: #666666;
        }
    }
    .days {
        width: 234px;
        display: flex;
        justify-content: space-between;
        display: flex;
        margin-left: 10px;
    }
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`
