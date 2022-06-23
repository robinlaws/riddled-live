import React, { useEffect, useState } from 'react';

export function Guesses(props){
    const [input, setInput] = useState("");
    let s = props.riddle.solution;
    const maxGuesses = 5;
    
    useEffect(() => {
        props.userGuesses.forEach((guess, i) => {
            console.log(guess);
            console.log(s);
            if (s.toLowerCase() === guess.toLowerCase()){
                props.isGuessCorrect(true);
            }
        })}
    , [props.userGuesses]);

    let inputs = [];
    for (let i = 0; i < maxGuesses; i++) {
    let value = "";
    if (i === props.userGuesses.length) {
      value = input;
    }
    if (i < props.userGuesses.length) {
      value = props.userGuesses[i];
    }

    const onChange = (event) => {
        console.log("ONCHANGE", event.target.value);
        setInput(event.target.value);
      }

    inputs.push(
      <div>
        <input type="text" value={value} onChange={onChange} id={`guess_${i}`} disabled={true} required/>
      </div>
    );
}

    return(
    <div style={{textAlign: "center"}}>
        {inputs}
    </div>
    )
}