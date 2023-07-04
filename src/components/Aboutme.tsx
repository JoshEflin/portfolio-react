import React from "react";
import headshot from "../assets/JoshEflin.jpg";
export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 id="about-me-header">Josh Eflin</h1>
      <img
        id="headshot"
        src={headshot}
        alt="This was supposed to be a photograph of yours truly"
      />
      <p>Josh Eflin is a new to the industry Full-Stack Web-Developer.</p>
      <p>He is currently enrolled in a bootcamp through Edx and UPENN</p>
      <p>
        Josh will graduate in May and is excited to take his first steps in a
        totally new direction
      </p>
      <p>
        Before he began programming, Josh had been an opera singer by trade,
        mostly working as a resident recital artist on cruise ships
      </p>
      <p>
        {" "}
        Josh is also a recreational road/gravel cyclist, not only because it's
        fun, but also because cycling opens up the world of data
      </p>
      <p>
        {" "}
        Currently Josh is learning React, Typescript, and the D3 data
        visualization library
      </p>
      <p>
        {" "}
        After all, the power meter readings are going to visualize themselves...
      </p>
    </div>
  );
}
