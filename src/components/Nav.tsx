import J from "./Svg";
import { useState } from "react";
// use state to change the colors of the nav links
// dynamically add href values
export interface navProps {
  currentView: string;
  handleView: (view: string) => void;
}

const navItemsArr = ["About Me", "Resume", "Projects", "Contact"];
const NavItem: React.FC<{
  currentView: string;
  navLink: string[];
  handleView: any;
}> = ({ currentView, handleView, navLink }) => {
  return (
    <>
      {navLink.map((item, index) => (
        <li className="nav-list-item" key={`nav-item-${index}`}>
          <a
            href={`#${item}`}
            onClick={() => handleView(`${item}`)}
            className={
              currentView === `${item}` ? "nav-item active" : "nav-item"
            }
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};
export default function Nav(props: navProps): JSX.Element {
  const { currentView, handleView } = props;

  return (
    <nav className="nav-container">
      {/* <div > */}
      <ul className="navbar">
        <J currentView={currentView} handleView={handleView} />
        <NavItem
          currentView={currentView}
          handleView={handleView}
          navLink={navItemsArr}
        />
      </ul>
      {/* </div> */}
    </nav>
  );
}
