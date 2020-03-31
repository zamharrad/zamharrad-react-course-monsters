import React, { Component } from "react";
import "./CardList.css";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monsters => (
        <h1 key={monsters.id}> {monsters.name}</h1>

      ))}
    </div>
  );
};

export default CardList;
