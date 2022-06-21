import React, { useDebugValue, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import SocialMedia from "../views/socialMedia";


export function Stats(props){
    let winPercentage = 0;
    if (props.user.gamesPlayed !== 0){
        winPercentage = (props.user.wins/props.user.gamesPlayed*100).toFixed(0);
    }

    const statStyle = {
        fontWeight: "bold",
        fontSize: 30,
        columnWidth: 100
    };
    const textStyle = {
        fontSize: 18
    };
    const borderStyle = {
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 1,
    };
    const guessDistrStyle = {
        textAlign: "right",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "helvetica"
    }


    return(
        <>    
        <br/>
        <h1>STATS</h1>
        <div class="container" style={{borderStyle: "solid", borderRadius: 5, borderWidth: 2, width: 1050, backgroundColor: "#f5f5f5", padding: "50px", verticalAlign: "middle", justifyContent: "center", marginTop: "50px", marginBottom: "100px"}}>
        <div style={{marginTop: 10}}>
            <Container >
                <Row style={statStyle} lg={6} className="justify-content-md-center">
                    <Col >{props.user.gamesPlayed}</Col>
                    <Col >{props.user.wins}</Col>
                    <Col >{winPercentage}</Col>
                </Row>
                <Row style={textStyle} lg={6} className="justify-content-md-center">
                    <Col>GAMES PLAYED</Col>
                    <Col>GAMES WON</Col>
                    <Col>WIN %</Col>
                </Row>
            </Container>
        </div>

        <div class="stats" style={{marginBottom: 15}}>
            <br/>
            <h4 style={{fontWeight: "bold", fontSize: 20}}>GUESS DISTRIBUTION</h4>

            <Row >
                <Col style={guessDistrStyle}>1</Col>
                <Col><ProgressBar now={props.user.one} max="5" style={{width: 300}} /></Col>
            </Row>
            <Row >
                <Col style={guessDistrStyle}>2</Col>
                <Col><ProgressBar now={props.user.two} max="5" style={{width: 300}} /></Col>
            </Row>
            <Row >
                <Col style={guessDistrStyle}>3</Col>
                <Col><ProgressBar now={props.user.three} max="5" style={{width: 300}} /></Col>
            </Row>
            <Row >
                <Col style={guessDistrStyle}>4</Col>
                <Col><ProgressBar now={props.user.four} max="5" style={{width: 300}} /></Col>
            </Row>
            <Row >
                <Col style={guessDistrStyle}>5</Col>
                <Col><ProgressBar now={props.user.five} max="5" style={{width: 300}} /></Col>
            </Row>

        </div>
        <SocialMedia />



        </div>
        </>
    )       
};
