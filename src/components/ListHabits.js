import styled from "styled-components";

function Days() {

    const listWeek = ["D", "S", "T", "Q", "Q", "S", "S"]

    return listWeek.map((v, i) => <Day key={i}>{v}</Day>)

}

export default function Habits({listHabits}) {
    return listHabits.map((v, i) =>
        <Habit key={i}>
            <div className="topo">
                <span>{v}</span>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <div className="days">
                <Days />
            </div>
        </Habit>)
}

const Habit = styled.div`
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
