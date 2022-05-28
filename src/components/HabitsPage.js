import HeaderPage from "./HeaderPage";
import Menu from "./Menu";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function HabitsPage() {

    const { token } = useContext(UserContext)

    return (
        <Container>
            <HeaderPage />
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    position: relative;
    background: #F2F2F2;
    `;
