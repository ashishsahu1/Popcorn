import React from "react";
import TitleSection from "../components/TitleSection";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import movieStyles from "../styles/movie.module.css";
import { resolve } from "styled-jsx/css";

export default async function page() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4a36bea119msh88084ccd78cb2a3p123a5ejsncfeb09342a18",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  let result = "";
  // try {
    const response = await fetch(url, options);
    result = await response.json();
    //console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }
  const data = result.titles;
  return (
    <>
      <TitleSection ttl="Movies" />
      {/* <Link href="movies/dynamicid">Go TO</Link> */}
      <div className={movieStyles.cards}>
        {data.map((item) => {
          return <MovieCard key={item.id} {...item}></MovieCard>;
        })}
      </div>
    </>
  );
}
