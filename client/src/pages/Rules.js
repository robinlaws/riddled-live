import React from "react";
import "../App.css";
import Container from 'react-bootstrap/Container'

export function Rules() {

    return (
        <>
        <Container>
        <h1>GAME RULES</h1>
        <br /> <br />
                <h2>Guess the RIDDLED in 5 turns!</h2>
                <p>Hit the enter button to submit your guess, or take a hint.</p>
                <p><strong>HINTS WILL COUNT AS A TURN.</strong></p>
                <p>A new RIDDLED is available each day for you to guess!</p>
        </Container>
        </>
    )
}