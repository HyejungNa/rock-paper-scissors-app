import React from "react";

const Box = (props) => {
  return (
    <div className={`box ${props.result.toLowerCase()}`}>
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item ? props.item.img : "/images/question.svg"}
        alt="user-image"
      ></img>
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
