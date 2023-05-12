import React from "react";

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
  return <>
    <h1>{main_data.title}</h1>
    <h3>{main_data.synopsis}</h3>
  </>;
}
