import React from "react";
import { Card } from "semantic-ui-react";

import "./App.css";

const PlayerCard = props => {
  return (
    <div className="player-list-grid-view" key={props.id}>
      <Card.Group stackable={false}>
        <Card color="blue" raised={true}>
          <Card.Content>
            <Card.Header className="card-header">{props.name}</Card.Header>
            <Card.Meta>{props.country}</Card.Meta>
            <Card.Meta># of Searches: {props.searches}</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default PlayerCard;
