import React from "react";
import styles from "./SingleMovieComponent.module.css";
import { useParams } from "react-router-dom";
const SingleMovieComponent = () => {
  const { id } = useParams();
  return <div>SingleMovieComponent {id}</div>;
};

export default SingleMovieComponent;
