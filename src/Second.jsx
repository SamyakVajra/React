import React from "react";
import { useParams } from "react-router-dom";

const Second = () => {
  let params = useParams();

  let username = params.username;

  return <>Welcome, {username}</>;
};

export default Second;
