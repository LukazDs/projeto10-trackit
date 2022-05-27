import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/images/logo.svg"

export default function LoginPage() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function login (event) {
        event.preventDefault()
        console.log("foi")
    }


    return (

        <Container>
            <img src={logo} />
            <Forms onSubmit={login}>
            <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='email' required></input>
                <input type="text" onChange={e => setPassword(e.target.value)} value={password} placeholder='senha' required></input>
                <button>Entrar</button>
            </Forms>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>


    )
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin-top: 68px;
    align-items: center;
    a {
        width: 232px;
        height: 17px;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
    `;

const Forms = styled.form`
    width: 303px;
    height: 148px;
    margin-top: 32px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
    }
    
    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
    `;
