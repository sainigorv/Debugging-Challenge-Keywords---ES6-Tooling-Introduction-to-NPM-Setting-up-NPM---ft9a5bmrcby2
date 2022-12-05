import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  const handleOnDoubleClick = () => {
    alert("cant edit it");
  };

  return (
    <div className="ball">
      <h1 className="count" ondoubleclick={handleOnDoubleClick}>
        {count}
      </h1>
      <button className="increment-button" onclick={handleOnClick}>
        Increment
      </button>
    </div>
  );
};

export default App;
