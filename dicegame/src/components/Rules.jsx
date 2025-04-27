import styled from "styled-components"

export default function Rules (){
    return (
        <RuleContainer>
            <h1>How to play dice game</h1>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RuleContainer>
    )
}

const RuleContainer = styled.div`
    padding: 20px;
    background-color: #FBF1F1;
    max-width: 750px;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 40px;
    h2 {
        font-size: 24px;
    }
    .text {
        margin-top: 24px;
    }
`