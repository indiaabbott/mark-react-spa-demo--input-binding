/**
 * Key takeaway: we can use map in combination with higher-order
 *  functions to make our code more concise
 *
 * TASK: replace the QWERTY row by also using a map
 */

import ButtonControlledInput from "./components/ButtonControlledInput";
import KeyboardControlledInput from "./components/KeyboardControlledInput";
import UncontrolledInput from "./components/UncontrolledInput";

function App() {
  return (
    <div>
      <h1>Inputs</h1>

      <ButtonControlledInput />
      <hr />
      <UncontrolledInput />
      <hr />
      <KeyboardControlledInput />
    </div>
  );
}

export default App;
