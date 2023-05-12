import React from "react";
import movieStyles from "../styles/movie.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard(item) {
  const { id, type, title, synopsis } = item.jawSummary;
  return (
    <div className={movieStyles.card}>
      <div className={movieStyles.card2}>
        <div className={movieStyles.content}>
          <div className={movieStyles.thumbnail}>
            <Image
              width={250}
              height={150}
              alt="Image"
              src={item.jawSummary.backgroundImage.url}
            />
          </div>
          <div className={movieStyles.txt}>
            <h3>{title}</h3>
            <p>{type}</p>
            <h5>{synopsis}</h5>
          </div>
          <div className={movieStyles.btnbox}>
            <Link className={movieStyles.btn} href={`/movies/${id}`}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
