import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.country}</h2>
      <h3>{props.searches}</h3>
    </div>
  );
};

export default PlayerCard;
