import styled from "styled-components";
import Numberselector from "./Numberselector";
import Totalscore from "./Totalscore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "./Button";
import Rules from "./Rules";


export default function Gameplay({toggle}){
    const [score, setScore] = useState(0)
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [error, setError] = useState();
    const [showRule , setShowRule] = useState(false);

    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * (max) + 1);
    }
      
    const rollDice = () => {
        if(!selectedNumber){
            return setError("You Have not Selected any Number");
        }
        const randomNumber = getRandomNumber(6);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        } else{
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    }
    const resetScore = () => {
        setScore(0)
    }
    return (
        <MainContainer>
            <div className="top_section">
                <Totalscore score={score}/>
                <Numberselector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currentDice={currentDice} rollDice={rollDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={() => setShowRule((prev) => !prev)}>{showRule ? "Hide" : "Show"} Rule</Button>
            </div>
            { showRule && <Rules/>}
            <span  onClick={toggle} class="material-symbols-outlined arrowkey">
                arrow_back
            </span>
        </MainContainer>
    )
}

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
        height: 170px;
    }
    .btns {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: 30px
    }
    .arrowkey {
        font-size: 40px;
        cursor: pointer;
    }

`