import { useState } from "react"
import styled from "styled-components"

export default function RoleDice({currentDice, rollDice}) {

    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 24px;
    }
    .dice {
        cursor: pointer;
    }
`