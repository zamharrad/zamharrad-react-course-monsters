import React from "react";
import "./Card.style.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        className="rounded"
        src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2> {props.monsters.name}</h2>
      <p>{props.monsters.email}</p>
    </div>
  );
};
