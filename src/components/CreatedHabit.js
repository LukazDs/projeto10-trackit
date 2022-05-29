import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../context/UserContext"

function Day({ day, id, listNumbersDays, setNumbersDays }) {

    const [clicked, setClicked] = useState(false)

    function wasClicked() {
        if (listNumbersDays.some(item => item === id)) {
            console.log('elemento repetido')
            const newListNumbers = listNumbersDays.filter(item => id !== item)
            setNumbersDays(newListNumbers)
        } else {
            setNumbersDays([...listNumbersDays, id]);
        }
    }
    return (
        <DesignDay
            style={
                {
                    background: `${!clicked ? "#FFFFFF" : "#CFCFCF"}`,
                    color: `${!clicked ? "#CFCFCF" : "#FFFFFF"}`
                }
            }
            onClick={() => {
                setClicked(!clicked);
                wasClicked()
            }}>
            {day}
        </DesignDay>
    )

}

function Days({listNumbersDays, setNumbersDays}) {
    
    const listWeek = ["D", "S", "T", "Q", "Q", "S", "S"]
    console.log(listNumbersDays)

    return listWeek.map((v, i) => <Day id={i} listNumbersDays={listNumbersDays} setNumbersDays={setNumbersDays} day={v} key={i} />)
}

export default function CreatedHabit({ setCreate, token }) {

    const [textInput, setTextInput] = useState("")
    const [listNumbersDays, setNumbersDays] = useState([])

    const { setListHabits, listHabits } = useContext(UserContext)
    console.log(listHabits)

    function getDate() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = { headers: { "Authorization": `Bearer ${token}` } };
        const promise = axios.get(URL, config);
        promise.then(res => setListHabits(res.data))
    }

    function submitForm(e) {
        e.preventDefault()
        if (listNumbersDays.length > 0) {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
            const config = { headers: { "Authorization": `Bearer ${token}` } }
            const body = { name: textInput, days: listNumbersDays }
            const promise = axios.post(URL, body, config)
            promise.then(res => { console.log(res.data); setCreate(false); getDate() })
        }
    }

    return (
        <CreateHabit>
            <Form onSubmit={submitForm}>
                <input
                    type={"text"}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    required />
                <div className="days-create"><Days listNumbersDays={listNumbersDays} setNumbersDays = {setNumbersDays}/></div>
                <FinallySession>
                    <a onClick={() => setCreate(false)}>Cancelar</a>
                    <button><span>Salvar</span></button>
                </FinallySession>
            </Form>
        </CreateHabit>
    )

}


const CreateHabit = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 18px;
`

const Form = styled.form`
    
    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        margin: 20px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    .days-create {
        width: 234px;
        display: flex;
        justify-content: space-between;
        margin: 0px 20px;
        margin-bottom: 15px;
    }
`

const DesignDay = styled.div`
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
    cursor: pointer;

    color: #DBDBDB;
`

const FinallySession = styled.div`
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        width: 69px;
        height: 20px;
        margin-left: 152px;
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        text-decoration: none;
        color: #52B6FF;
    }
    button {
        width: 84px;
        height: 36px;
        margin-right: 10px;
        background: #52B6FF;
        border-radius: 5px;
        border-color: #52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        color: #FFFFFF;
    }
`