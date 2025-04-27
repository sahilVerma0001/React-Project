import { useState } from "react";
import styled from "styled-components"


export default function Numberselector ({ error, setError, selectedNumber, setSelectedNumber}){
    let arrnumber = [1,2,3,4,5,6];
    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {arrnumber.map((value,i) =>(
                    <Box $isSelected = {value === selectedNumber} key={i} onClick={() => numberSelectorHandler(value)}>{value}</Box>
                ))}
            </div>
            <div className="para">
                <p>Select Number</p>   
            </div>
        </NumberSelectorContainer>
    )
}

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
        display: flex;
        gap: 24px;
    }
    .error {
        color: red;
        font-size: 18px;
        font-weight: 500;
    }
    .para {
        font-size: 24px;
        font-weight: 600;
        padding-top: 30px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.$isSelected ? "black" : "white")};
    color: ${(props) => (!props.$isSelected ? "black" : "white")};
`