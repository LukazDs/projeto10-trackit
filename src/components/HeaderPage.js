import styled from "styled-components"

export default function HeaderPage() {
    return (
        <Header>
            <span>HeaderPage</span>
        </Header>
    )
}

const Header = styled.div`
    width: 375px;
    height: 70px;
    position: fixed;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`