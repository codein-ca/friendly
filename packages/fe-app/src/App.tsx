import React from "react";
import "./App.css";
import Link from "@codein/fe-app/src/components/Link";

function App() {
  return (
    <div className="App">
      <h1>Test linking a Storybook component</h1>
      <a href="#not-the-one">Should render below this one</a>
      <Link linkHREF="google.com" linkText="Google" />
    </div>
  );
}

export default App;
