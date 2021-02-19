import { useState } from "react";

function KeyboardControlledInput() {
  const [typedMessage, setTypedMessage] = useState("");

  return (
    <>
      <h3>
        Keyboard controlled input - has a <code>value</code> prop <i>and</i> an{" "}
        <code>onChange</code> event handler
      </h3>
      <input
        // 1st direction binding: state -> input value
        value={typedMessage}
        // 2nd direction binding: onChange event -> state
        onChange={(event) => {
          /**
           * Recipe to learn: React stores the relevant
           *  information for this 2-way binding in
           *  event.target.value
           */
          setTypedMessage(event.target.value);
          console.log(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(
            "keyboard controlled input:\n",
            typedMessage,
            "\n\nwhich we could in principle process in some way"
          )
          setTypedMessage("thanks!")
        }}
      >
        Log input
      </button>
    </>
  );
}

export default KeyboardControlledInput;
