import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";

export default function Home() {
  const Feature_api =
    "https://api.themoviedb.org/3/movie/popular?api_key=dae81bdae797ded183ee269afd03a3c4";

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovies(Feature_api);
  }, []);
  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      });
  };
  return (
    <>
      <div className="">
        <Movie movie={movie} />
      </div>
    </>
  );
}
