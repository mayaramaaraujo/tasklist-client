import styled from 'styled-components';
import { redLightColor, redMediumColor } from '../../constants/colors';

export const Button = styled.button `
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    background-color: ${props => props.signIn ? redLightColor : redMediumColor };
    
    :hover {
        cursor: pointer;
        opacity: 0.8;
        transition: 0.5s;
    }
`

export const UserFormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
    width: 36%;    

    @media only screen and (max-width: 500px){
        width: 80%;
    }
`
