// import { NavLink } from "react-router-dom";
import React from "react";
import {Link} from "react-router-dom";
// import styles from "./Navbar.module.css";

const links = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/login", text: "Login" }
];

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      {links.map((link) => (
        <Link key={link.path} to={link.path}>
            {link.text}
        </Link>
      ))}
    </div>
  );
}
export default Navbar;
