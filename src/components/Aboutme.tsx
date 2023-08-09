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
      <div className="flex column center">
        <p className="about-me-text">
          Josh Eflin is a skilled Full-Stack Web Developer who has recently
          entered the technology industry. He is a recent graduate of a
          comprehensive bootcamp program offered jointly by Edx and the
          University of Pennsylvania.
        </p>
        <p className="about-me-text">
          {" "}
          Before transitioning to the realm of programming, Josh established
          himself as an accomplished opera singer, primarily holding the role of
          a resident recital artist aboard cruise ships. This background in the
          arts has endowed him with a keen sense of creativity and discipline
          that he seamlessly translates into his coding endeavors.
        </p>
        <p className="about-me-text">
          {" "}
          In addition to his professional pursuits, Josh is an enthusiastic road
          and gravel cyclist. This recreational passion not only provides
          enjoyment, but also serves as an avenue to explore and extract
          valuable insights from data.
        </p>
        <p className="about-me-text">
          {" "}
          Currently, Josh is deeply engaged in mastering React, Typescript, and
          the D3 data visualization library. His dedicated focus on these
          technologies is driven by a profound understanding of the importance
          of creating clear, insightful visualizations that can effectively
          communicate complex data sets.{" "}
        </p>
        <p className="about-me-text">
          Josh's commitment to continuous growth and his unique blend of
          artistic and analytical skills make him a dynamic and dedicated
          developer. His journey in technology is fueled by the belief that,
          like anything in life, diligent effort and deliberate execution lead
          to meaningful results.
        </p>
      </div>
      {/* <p className="about-me-text">Josh Eflin is a new to the industry Full-Stack Web-Developer.</p>
      <p className="about-me-text">He is currently enrolled in a bootcamp through Edx and UPENN</p>
      <p className="about-me-text">
        Josh will graduate in May and is excited to take his first steps in a
        totally new direction
      </p>
      <p className="about-me-text">
        Before he began programming, Josh had been an opera singer by trade,
        mostly working as a resident recital artist on cruise ships
      </p>
      <p className="about-me-text">
        {" "}
        Josh is also a recreational road/gravel cyclist, not only because it's
        fun, but also because cycling opens up the world of data
      </p>
      <p className="about-me-text">
        {" "}
        Currently Josh is learning React, Typescript, and the D3 data
        visualization library
      </p>
      <p className="about-me-text">
        {" "}
        After all, the power meter readings are going to visualize themselves...
      </p> */}
    </div>
  );
}
