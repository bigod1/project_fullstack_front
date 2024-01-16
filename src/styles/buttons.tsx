import styled from "styled-components";


export const ButtonTransparent = styled.button`
    height: 3rem;

    background: transparent;
    border: 1px solid #00000020;
    border-radius: 2rem;

    padding: 2rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #dddddd;
    }
`

export const ButtonWhite = styled.button`
    height: 3rem;

    background-color: f6f6f6;
    border: 1px solid #00000020;
    border-radius: 2rem;

    padding: 2rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #dddddd;
    }
`