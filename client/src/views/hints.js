import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Hints(props){
  const filterArray = (value) => {
    return value !== " ";
  }
  const shuffleArray = (array) => {
    let shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }
    let solution = props.riddle.solution || "";
    let solutionArray = (Array.from(solution));
    solutionArray = solutionArray.filter(filterArray);
    const [shuffledArray, setShuffledArray] = useState([]);
    const [count, setCount] = useState(1);
    const [blanks, setBlanks] = useState("");
    const [index, setIndex] = useState(0);

    const hintCount = async () => {
        setCount(count+1);
        let hintString = "";
        let blankString = "";

    if (count === 1) {
        for (let i of solution) {
          if (i !== " "){
            blankString += "_  ";
          } else {
            blankString += ("\xa0\xa0\xa0");
          }
        }
        setBlanks(blankString);
        hintString += `There are ${solutionArray.length} letters!`
        props.setUserGuesses(props.userGuesses.concat("HINT: " + hintString));
        setShuffledArray(shuffleArray(solutionArray));
    }

    if (count === 2 || count === 3 || count === 4 || count === 5) {
      let char = shuffledArray[index];
      setIndex(index + 1);
      hintString += `The answer contains the letter ${char.toUpperCase()}`;
      props.setUserGuesses(props.userGuesses.concat("HINT: " + hintString));
    }
}

return (
    <div>
    <div><h3>{blanks}</h3></div>
    <Button className="bg-custom-button" onClick={hintCount}>Get Hint</Button>
    </div> 
  )
}
