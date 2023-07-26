import React from "react";
import { useRouteError } from "react-router-dom";

interface IProps {}

function NotFound(props: IProps) {
  const error = useRouteError();
  return (
    <div style={{}}>
      <h1>NotFound</h1>
      <h1>Sorry, an unexpected error has occured.</h1>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
}

export default NotFound;
