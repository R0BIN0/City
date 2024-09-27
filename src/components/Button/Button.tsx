import { IButton } from "@/interfaces/components/Button/IButton";
import React from "react";
import "./Button.css";

const Button = (props: IButton) => {
  return (
    <button className="button-container" style={{ padding: props.padding }}>
      <span>
        <p>{props.title}</p>
        <p>{props.title}</p>
      </span>
    </button>
  );
};

export default Button;
