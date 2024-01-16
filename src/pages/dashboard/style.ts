import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    height: 100vh;
    
    padding: 13vh 15vw 0;
`

export const DashHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 3rem;
`

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

export const StyledUl = styled.ul`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem;

    padding: 15px 25px;
`