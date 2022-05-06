import styled from 'styled-components';

export const TaskPageContainer = styled.div `
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 700px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`