import React from "react";
import styles from "../../styles/moviespage.module.css";
import Image from "next/image";

export default async function page({ params }) {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4a36bea119msh88084ccd78cb2a3p123a5ejsncfeb09342a18",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  let data = "";
  try {
    const res = await fetch(url, options);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  const main_data = data[0].details;
  const genres = main_data.genres;

  

  return (
    <>
      <div className={styles.main}>
        <div
          className={styles.banner}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 0, 141, 0.7), rgba(255, 0, 141, 0.7))," +
              `url('${main_data.backgroundImage.url}')`,
          }}
        >
          <h1>{main_data.title}</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <p>
              Released on - <span>{main_data.releaseYear}</span>{" "}
            </p>
            <div className={styles.tags}>
              <ul>
                {genres.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </div>
            <div className={styles.cast}>
              <ul>
                {main_data.cast.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.nameImg}>
              <Image src={main_data.logoImage.url} alt="poster" fill />
            </div>
            <div className={styles.bannerImg}>
              <Image src={main_data.backgroundImage.url} alt="poster" fill />
            </div>
            <div className={styles.abt}>
              <p>{main_data.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
