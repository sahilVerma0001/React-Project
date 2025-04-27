import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    color: white;
    border: none;
    min-width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s ease-in;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`