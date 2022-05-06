import styled from "styled-components";
import { brownColor, redLightColor, redMediumColor } from "../../constants/colors";

export const TaskFormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${redLightColor};
    padding: 30px;
    border-radius: 5px;
    min-height: 160px;
    max-height: 240px;
    width: 25%;
    margin: 5%;

    @media only screen and (max-width: 700px) {
        width: 80%;
    }
`

export const Button = styled.button `
    background-color: ${props => props.logout ? "gray": redMediumColor};
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    color: ${brownColor};
    
    :hover {
        background-color: ${brownColor};
        color: white;
        transition: 1s;
        cursor: pointer;
    }

    :disabled {
        color: gray;
        background-color: lightgray;
        cursor: auto;
    }

`

export const Input = styled.input `
    all: unset;
    background-color: white;
    padding: 1%;
    border: none;
    border-radius: 5px;
    height: 35px;
    width: 100%;
    font-weight: lighter;
    margin-bottom: 16px;
    box-sizing: border-box;
    word-wrap: break-word;


`


