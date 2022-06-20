import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function Hints(props){
    let solution = props.riddle.solution || "";
    let solutionArray = (Array.from(solution));
    const [count, setCount] = useState(1);

    const filterArray = (value) => {
      return value !== " ";
    }

    useEffect(() => {
      solutionArray = solutionArray.filter(filterArray);
    })

    const hintCount = async () => {
        console.log("HINT COUNT ",count);
        console.log("REMAINING TURNS:", props.remainingTurns);
        setCount(count+1);
        let hintString = "";

    if (count === 1) {
        for (let i of solution) {
          if (i !== " "){
            hintString += "_ ";
          } else {
            hintString += ("\xa0\xa0");
          }
        }
        props.setUserGuesses(props.userGuesses.concat("HINT: " + hintString));
    }
    if (count === 2 || count === 3 || count === 4 || count === 5) {
      solutionArray = solutionArray.sort(() => Math.random() - 0.5);
      let char = solutionArray.pop();
      hintString += `The answer contains the letter ${char}`;
      props.setUserGuesses(props.userGuesses.concat("HINT: " + hintString));
    }
}


return (
    <div>
    <Button className="bg-custom-button" onClick={hintCount}>Get Hint</Button>
    </div> 
  )
}