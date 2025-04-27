import styled from "styled-components";
import { Button } from "./Button";
export default function Startgame({ toggle }){
    return (
        <>
            <Container>
                <div>
                    <img src="/images/dices.png" alt="dices" />
                </div>
                <div className="contant">
                    <h1>DICE GAME</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>                
            </Container>
        </>
    )
}

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    .contant {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;
