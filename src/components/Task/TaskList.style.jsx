import styled from "styled-components";
import { brownColor, redLightColor } from "../../constants/colors";
import checkImage from "../../assets/Vector.png"
import unchekedImage from "../../assets/unchecked.png"

export const TaskListContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 71%;
    margin: 0 2%;
    row-gap: 24px;
    column-gap: 12px;

    @media only screen and (max-width: 700px) {
        width: 80%;
    }
`

export const TaskCard = styled.div `
    background-color: ${redLightColor};
    height: 240px;
    width: 240px;
    border-radius: 5px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: 2px 2px 5px #aaaaaa;

    :hover {
        box-shadow: 2px 2px 5px #6b6b6b;
    }

    opacity: ${props => props.isDone ? 0.7 : 1};
`

export const TaskHeader = styled.div `
    display: flex;
    justify-content: space-between;
`

export const TaskTitle = styled.input `
    margin: 0;
    padding: 5px;
    width: 160px;
    background-color: white;
    border-radius: 5px;
    color: ${brownColor};
    word-wrap: break-word;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0; 
    color: black;
    font-weight: bold;

    :focus {
        box-shadow: 2px 2px 5px #aaaaaa;
        border: 0 none;
        outline: 0; 
    }

    ::placeholder {
        color: black;
        font-weight: bold;
    }

    
`

export const Button = styled.button `
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        opacity: 0.8;
        transition: 0.5s;
        cursor: pointer;
        box-shadow: 0.1px 0.1px 1px;
    }
`

export const Checker = styled.button `
    background: url(${props => props.checked ? checkImage : unchekedImage}) no-repeat center center;
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    box-sizing: border-box;

    :hover {
        cursor: pointer;
        opacity: 0.9;
        transition: 0.3s;
    }

`
export const Icon = styled.img `
    width: 100%;
    height: 100%;
`

export const TaskDescription = styled.textarea `
    background-color: white;
    border-radius: 5px;
    height: 100%;
    margin: 2% 0;
    word-wrap: break-word;
    border: 0 none;
    outline: 0; 

    :focus {
        box-shadow: 2px 2px 5px #aaaaaa;
        border: 0 none;
        outline: 0; 
    }

    ::placeholder {
        color: black;
    }
`

export const Span = styled.div `
    border-radius: 5px;
    font-size: 0.9rem;
    color: #333333;
`
