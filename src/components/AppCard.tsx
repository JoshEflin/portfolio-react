import gitHubIcon from "../assets/github-mark.png";
import { Links, AppCardProps } from "./data/appCardData";
import React from "react";

const TechComponent: React.FC<{ techs: string[] }> = ({ techs }) => {
  return (
    <ul className="tech-list">
      {techs.map((tech, index) => (
        <li className="tech-list-item" key={index}>
          {tech}
        </li>
      ))}
    </ul>
  );
};

const LinkComponent: React.FC<Links> = ({ github, deployed }) => {
  return (
    <ul className="link-list">
      <li className="link-list-item bold">
        <a href={github} target="_blank">
          <p>Check out the repository</p>
          <img className="git-hub-icon" src={gitHubIcon} />
        </a>
      </li>
      <li className="link-list-item">
        <a href={deployed} target="_blank">
          <p>Deployed Application</p>
          <i id="plane-icon" className="fa-regular fa-paper-plane"></i>
        </a>
      </li>
    </ul>
  );
};
const handleStringSplit = (str: String) => {
  const halfway = Math.floor(str.length / 2);
  const whitespace = str.indexOf(" ", halfway);
  const first = str.substring(0, whitespace);
  const second = str.substring(whitespace, str.length);
  return { firstHalf: first, secondHalf: second };
};
// Below function is to split up large text descriptions into smaller p tags to append. need to split strings on whitespace though
const DescriptionComponent: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  if (description.length > 75) {
    const { firstHalf, secondHalf } = handleStringSplit(description);
    if (firstHalf.length > 75) {
      const firstStrHalf = handleStringSplit(firstHalf);
      const secondStrHalf = handleStringSplit(secondHalf);
      console.log(title);
      return (
        <div className="description-card">
          <h2> {title}</h2>
          <p> {firstStrHalf.firstHalf}</p>
          <p> {firstStrHalf.secondHalf}</p>
          <p> {secondStrHalf.firstHalf}</p>
          <p> {secondStrHalf.secondHalf}</p>
        </div>
      );
    } else {
      return (
        <div className="description-card">
          <h2> {title}</h2>
          <p>{firstHalf}</p>
          <p>{secondHalf}</p>
        </div>
      );
    }
  } else {
    return (
      <div className="description-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
};
// this makes one CARD, use state here, when user clicks, state is changes, and props for app card change

export default function AppCard({ data }: { data: AppCardProps[] }) {
  return (
    <>
      {console.log(data)}
      {data.map(
        (
          {
            title,
            img,
            description,
            techs,
            links: { deployed, github },
          }: AppCardProps,
          index
        ) => (
          <div key={index} className="appCard">
            <div className="flex appCard-top">
              <DescriptionComponent title={title} description={description} />
              <img className="appCard-img" src={img} />
            </div>
            <TechComponent techs={techs} />
            <LinkComponent github={github} deployed={deployed} />
          </div>
        )
      )}
    </>
  );
}
