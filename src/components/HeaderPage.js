import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function HeaderPage() {

    const { image } = useContext(UserContext)

    return (
        <Header>
            <span>TrackIt</span>
            <img src={(image.length !== 0) ? image : localStorage.getItem("image")} alt={image}/>
        </Header>
    )
}

const Header = styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        object-fit: cover;
    }
    span {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
`