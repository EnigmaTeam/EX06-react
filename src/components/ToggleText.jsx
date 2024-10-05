import { useState } from "react";
import "./ToggleText.css";

export const ToggleText = () => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };

  const text = (
    <p className="cursor typewriter-animation">
      AmirHossein Jahankheir Amlashi
    </p>
  );

  return (
    <div className="container">
      <h1>{showText && text}</h1>
      <button onClick={handleClick}>{showText ? "Hide" : "Show"}</button>
    </div>
  );
};
