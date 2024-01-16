import styled from "styled-components";


export const Container = styled.div`
    top: 0;
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
    height: 100vh;
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    
    > div{
        background-color: #c6c6c6;
        padding: 2rem 2rem;
        max-width: 400px;

        border-radius: 1rem;
    }
`