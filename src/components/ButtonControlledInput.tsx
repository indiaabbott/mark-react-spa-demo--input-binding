import { useState } from "react";

function ButtonControlledInput() {
  const [typedMessage, setTypedMessage] = useState("");

  const makeHandlerToAppend = (input: string) => {
    return () => setTypedMessage((prevState) => `${prevState}${input}`);
  };

  const handleBackspace = () => {
    setTypedMessage((prevState) => {
      const newLength = prevState.length - 1;
      return prevState.substr(0, newLength);
    });
  };

  return (
    <>
      <h3>
        Controlled input - has a <code>value</code> prop
      </h3>
      <p>
        This means we can easily access the input's value at any point - because
        it's the same as our state value.
      </p>
      <p>
        However: we can't type using our normal physical keyboard! Look at
        <code>KeyboardControlledInput</code> for that.
      </p>
      {/*
        see what console warning React gives if we remove the readOnly  
      */}
      <input value={typedMessage} readOnly />
      <button
        onClick={() =>
          console.log(
            "button controlled input:\n",
            typedMessage,
            "\n\nwhich we could in principle process in some way"
          )
        }
      >
        Log input
      </button>
      <div>
        <button onClick={makeHandlerToAppend("q")}>Q</button>
        <button onClick={makeHandlerToAppend("w")}>W</button>
        <button onClick={makeHandlerToAppend("e")}>E</button>
        <button onClick={makeHandlerToAppend("r")}>R</button>
        <button onClick={makeHandlerToAppend("t")}>T</button>
        <button onClick={makeHandlerToAppend("y")}>Y</button>
        <button onClick={makeHandlerToAppend("u")}>U</button>
        <button onClick={makeHandlerToAppend("i")}>I</button>
        <button onClick={makeHandlerToAppend("o")}>O</button>
        <button onClick={makeHandlerToAppend("p")}>P</button>
      </div>
      <button onClick={handleBackspace}>Backspace</button>
    </>
  );
}

export default ButtonControlledInput;
