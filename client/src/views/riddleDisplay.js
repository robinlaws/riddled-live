import React from 'react';

export function RiddleDisplay(props){
    return(
        <div>
            <h1>RIDDLED</h1>
            <br/>
            <h5>{props.riddle.riddle}</h5>
        </div>
    )

}

export function EndOfTurns(){
    return(
        <div>
            <p>SORRY OUT OF TURNS.</p>
        </div>
    )
}

export function GuessCorrect(){
    return(
        <div>
            <p>WAY TO GO!</p>
        </div>
    )
}

export function SolutionDisplay(props){
    return(
        <div>
            <p>THE ANSWER IS: {props.riddle.solution}</p>
        </div>
    )
}