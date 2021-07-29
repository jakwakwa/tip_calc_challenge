import React from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./ChildComponent";

const App = () => {
  return (
    <>
      <div>Hallo from App.js</div>
      <ChildComponent />
    </>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
