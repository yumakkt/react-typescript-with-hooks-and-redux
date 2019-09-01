import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface TParams { type: string }

const Game = ({ match }: RouteComponentProps<TParams>) => {
  console.log("called Game");
  return <h2>{match.params.type}</h2>;
};

export default Game;
