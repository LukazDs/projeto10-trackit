import styled from "styled-components"
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
    const { percentage } = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <>
            <Footer>
                <Link to="/habits">Hábitos</Link>
                <div onClick={() => navigate("/today")}>
                    <CircularProgressbar strokeWidth={10} value={percentage} text={`Hoje`} />
                </div>
                <Link to="/history">Histórico</Link>
            </Footer>
        </>
    )
}

const Footer = styled.div`
    position: fixed;
    z-index: 1;
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 0px;
    top: 667px;
    background: #FFFFFF;
    a {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: #52B6FF;
    }
    div {
        margin-bottom: 65px;
        border-radius: 91px;
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        cursor: pointer;
    }
    `;