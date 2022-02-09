import { useParams } from "react-router-dom";
import React from "react";

const Portfolio = () => {
  let { id } = useParams();
  return <div>this is my portfolio id {id}</div>;
};
export default Portfolio;
