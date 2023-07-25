import React from "react";
import styles from "./SingleMoviePage.module.css";
import { useParams } from "react-router-dom";
const SingleMoviePage = () => {
  const { id } = useParams();
  return <div>SingleMovieComponent {id}</div>;
};

export default SingleMoviePage;
