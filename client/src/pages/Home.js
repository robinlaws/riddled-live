import React from 'react';
import {useState, useEffect} from 'react';
import { RiddleDisplay, EndOfTurns, GuessCorrect, SolutionDisplay } from '../views/riddleDisplay';
import {Hints} from "../views/hints";
import {Guesses} from "../views/guesses";
import { UserKeyboard } from '../components/keyboard';
import {Stats} from "../pages/Stats";
import "../App.css";

export function Home(props){
    const [remainingTurns, setRemainingTurns] = useState(5);
    const [userGuesses, setUserGuess] = useState([]);
    const [noMoreTurns, setNoMoreTurns] = useState(false);
    const [correctGuess, isGuessCorrect] = useState(false);
    
    useEffect(() => {
        setRemainingTurns(remainingTurns - 1);
        if (remainingTurns === 0){
          setNoMoreTurns(true);
          console.log(remainingTurns);
        } 
      },[userGuesses]);

    if (props.user){
    if (props.user.datePlayed === props.riddle.date){
        return (
          <div className="App"><h1>COME BACK TOMORROW FOR A NEW RIDDLE!</h1>
          <p><strong>Today's Riddle: </strong>{props.riddle.riddle}</p>
          <p><strong>Solution: </strong>{props.riddle.solution}</p>
          </div>
        )
      }
    }
    if(noMoreTurns){
      props.user.datePlayed = props.riddle.date;
        props.user.gamesPlayed += 1;
        localStorage.setItem('user', JSON.stringify(props.user));
        return(
            <div className="App">
              <RiddleDisplay riddle={props.riddle} />
              <EndOfTurns />
              <SolutionDisplay riddle={props.riddle} />
            </div>
          )
        }
    if (correctGuess){
        props.user.datePlayed = props.riddle.date;
        props.user.playedToday = true;
        props.user.wins +=1;
        props.user.gamesPlayed +=1;
        switch(remainingTurns) {
            case 0: props.user.five +=1;
                    break;
            case 1: props.user.four +=1;
                    break;
            case 2: props.user.three +=1;
                    break;
            case 3: props.user.two +=1;
                    break;
            case 4: props.user.one +=1;
                    break;
        }
        localStorage.setItem('user', JSON.stringify(props.user));
        return(
            <div className="App">
                <RiddleDisplay riddle={props.riddle} />
                <GuessCorrect />
                <SolutionDisplay riddle={props.riddle} />
                <br/>
                <Stats user={props.user}/>
            </div>
        )
    }
    else{
        return(
            <div>
            <RiddleDisplay riddle={props.riddle}/>
            <Hints riddle={props.riddle} remainingTurns={remainingTurns} setUserGuesses={setUserGuess} userGuesses={userGuesses}/>
            <Guesses userGuesses={userGuesses} riddle={props.riddle} isGuessCorrect={isGuessCorrect}/>
            <UserKeyboard setUserGuess={setUserGuess} userGuesses={userGuesses} />
            </div>
        )
    }
}


