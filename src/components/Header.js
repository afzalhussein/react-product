import React from "react";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <LiContainer options={options()} />
      </nav>
    </header>
  );
};

export default Header;

function options() {
  return [
    <h2
      className="header-h2"
      style={{ fontFamily: "monospace", fontSize: "30px" }}
    >
      Redux Shopping App
    </h2>,
    <Cart />,
  ];
}

function LiContainer({ options }) {
  return (
    <ul className="header-ul">
      {options.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
