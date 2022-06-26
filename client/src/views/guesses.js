import React, { useEffect, useRef } from 'react';

export function Guesses(props){
    const inputRef = useRef(null);
    let s = props.riddle.solution;
    const maxGuesses = 5;
    
    useEffect(() => {
        props.userGuesses.forEach((guess, i) => {
            console.log(guess);
            if (s.toLowerCase() === guess.toLowerCase()){
                props.isGuessCorrect(true);
            }
        })

      }
    , [props.userGuesses]);

    const onChange = (event) => {
      props.setInput(event.target.value);
    } 

    let inputs = [];
    for (let i = 0; i < maxGuesses; i++) {
      let value = "";
      if (i === props.userGuesses.length) {
        value = props.input;
      }
      if (i < props.userGuesses.length) {
        value = props.userGuesses[i];
      }

      inputs.push(
        <div>
          <input ref={i !== props.userGuesses.length ? null: inputRef} type="text" value={value} onChange={onChange} id={`guess_${i}`} disabled={i !== props.userGuesses.length} required/>
        </div>
      );
    }

    inputRef.current?.focus?.();  

    return(
    <div style={{textAlign: "center"}}>
        {inputs}
    </div>
    )
}