import React from "react";

import SignupForm from "./components/SignupForm.js";
import NewForm from "./components/forms/NewForm";
import ExampleForm from "./components/forms/ExampleForm";

function App() {
  return (
    <div className="App">
      <h1>Custom Hooks are Magic 🧙‍♂️</h1>
      <SignupForm />
      {/* <NewForm />
      <ExampleForm /> */}
    </div>
  );
}

export default App;