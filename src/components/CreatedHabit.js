import styled from "styled-components"

function Days () {

    const listWeek = ["D", "S", "T", "Q", "Q", "S", "S"]

    return listWeek.map((v, i) => <Day key={i}>{v}</Day>)
        
}

export default function CreatedHabit () {


    return (
        <CreateHabit>
            <Form>
                <input />
                <div><Days /></div>
                <FinallySession>
                    <a>Cancelar</a>
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

    div {
        width: 234px;
        display: flex;
        justify-content: space-between;
        margin: 0px 20px;
        margin-bottom: 15px;
    }
`

const Day = styled.button`
    width: 30px;
    height: 30px;
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
    width: 176px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        width: 69px;
        height: 20px;
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