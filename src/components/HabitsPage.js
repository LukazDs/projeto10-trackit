import HeaderPage from "./HeaderPage";
import Menu from "./Menu";
import styled from "styled-components";

export default function HabitsPage() {
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
