import React, {  useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function UserKeyboard(props){
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onKeyPress = button => {
    if (button === "{bksp}"){
      props.setInput(props.input.slice(0, -1));  
    }
    else if (button === "{space}"){
      props.setInput(props.input + " ");
    }
    else if (button === "{enter}"){
      props.setUserGuess(props.userGuesses.concat(props.input));
      props.setInput("");
    }
    else {
      props.setInput(props.input + button);
    }
  }
    return (
      <>
        <br></br>

        <div className="App">
          <div className="keyboard">
        <br></br>
          <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={"default"}
            onKeyPress={onKeyPress}
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
          <br/><br/><br/>
          </div>
        </div>
      </>
    );
  }


