import React, { Component } from "react";
import "./CardList.css";
import { Card } from "../card/Card";

const CardList = props => {
  // console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monsters => (
        <Card key={monsters.id} monsters={monsters} />
      ))}
    </div>
  );
};

export default CardList;
