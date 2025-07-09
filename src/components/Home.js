import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const headingText = `${name} is a Web Developer from ${city}`;
  
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>{headingText}</h1>
    </div>
  );
}

export default Home;
