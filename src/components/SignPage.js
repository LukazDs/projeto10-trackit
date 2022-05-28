import React from 'react';
import styled from 'styled-components';
import logo from "../assets/images/logo.svg";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './loaders/Loading';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function SignPage() {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [imageInput, setImageInput] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()
    const {setImage} = useContext(UserContext)

    function login(event) {
        event.preventDefault()

        setIsLoading(true)

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(
            URL, {
            email,
            name,
            image: imageInput,
            password,
        })

        promise.then(() => { setIsLoading(false); navigate("/");  setImage(imageInput) })
            .catch(err => { setIsLoading(false); alert(err.response.statusText); })
    }

    return (

        <Container>
            <img src={logo} />
            <Forms onSubmit={login}>
                <input disabled={isLoading} type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='email' required></input>
                <input disabled={isLoading} type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder='senha' required></input>
                <input disabled={isLoading} type="text" onChange={e => setName(e.target.value)} value={name} placeholder='nome' required></input>
                <input disabled={isLoading} type="text" onChange={e => setImageInput(e.target.value)} value={imageInput} placeholder='imagem' required></input>
                <button disabled={isLoading} style={{ background: `${isLoading ? "#52B6FF" : "#52B6FF"}` }}>{isLoading ? <Loading /> : "Cadastrar"}</button>
            </Forms>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </Container>


    )
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background: #FFFFFF;
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
    height: 210px;
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
