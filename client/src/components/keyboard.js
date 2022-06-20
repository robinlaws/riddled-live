import React, {  useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function UserKeyboard(props){
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onKeyPress = button => {
    if (button === "{bksp}"){
      setInput(input.slice(0, -1));  
    }
    else if (button === "{space}"){
      setInput(input + " ");
    }
    else if (button === "{enter}"){
      props.setUserGuess(props.userGuesses.concat(input));
      setInput("");
    }
    else {
      setInput(input + button);
    }
  }
  const onChange = (event) => {
    console.log("ONCHANGE", event.target.value);
    setInput(event.target.value);
  }

    return (
      <>
        <br></br>
        <div>Guess: {input}</div>
        <div className="App">
        <br></br>
        <br></br>
          <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onKeyPress={onKeyPress}
            onChange={onChange}
            theme={"hg-theme-default myTheme1"}
            layout={{
              default: [
                "1 2 3 4 5 6 7 8 9 0 {bksp}",
                "q w e r t y u i o p ",
                "a s d f g h j k l ' {enter}",
                "z x c v b n m , . ",
                ".com @ {space}"
              ]
            }}
          />
        </div>
      </>
    );
  }


