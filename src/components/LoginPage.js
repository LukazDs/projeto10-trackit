import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/images/logo.svg"
import Loading from './loaders/Loading';

export default function LoginPage() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [token, setToken] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    function login(event) {
        event.preventDefault()

        setIsLoading(true)

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }

        const promise = axios.post(URL, body)

        promise.then(res => {
            setIsLoading(false);
            setToken(res.data.token);
        })
            .catch(err => {alert(err.message); setIsLoading(false)})
    }


    return (

        <Container style={{ background: `${isLoading ? "#E5E5E5" : "#FFFFFF"}` }}>
            <img src={logo} />
            <Forms onSubmit={login}>
                <input 
                    style={{ background: `${isLoading ? "#F2F2F2" : "#FFFFFF"}` }}
                    type="email" onChange={e => setEmail(e.target.value)}
                    value={email}
                    disabled={isLoading}
                    placeholder='email' required></input>
                <input 
                    style={{ background: `${isLoading ? "#F2F2F2" : "#FFFFFF"}` }}
                    type="password" onChange={e => setPassword(e.target.value)}
                    value={password}
                    disabled={isLoading}
                    placeholder='senha' required></input>
                <button disabled={isLoading} style={{ background: `${isLoading ? "#52B6FF" : "#52B6FF"}` }}>{isLoading ? <Loading /> : "Entrar"}</button>
            </Forms>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>


    )
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 68px;
    }
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
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
    }
    
    button {
        width: 303px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
    `;
