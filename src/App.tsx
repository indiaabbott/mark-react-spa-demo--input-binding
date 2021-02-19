/**
 * Key takeaway: we very rarely want an 'uncontrolled input' in React.
 *  We normally want to control its input so that we can use its data
 *  somehow.
 */

import ButtonControlledInput from "./components/ButtonControlledInput";
import KeyboardControlledInput from "./components/KeyboardControlledInput";
import UncontrolledInput from "./components/UncontrolledInput";
import TestingComponent from "./components/TestingComponent";

function App() {
  return (
    <div>
      <h1>Inputs</h1>
      <TestingComponent />
      <hr />
      <ButtonControlledInput />
      <hr />
      <UncontrolledInput />
      <hr />
      <KeyboardControlledInput />
    </div>
  );
}

export default App;
