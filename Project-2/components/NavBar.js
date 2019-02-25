import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <nav className="nav-wrapper darken-3 pink">
        <div className="container">
          <a className="brand-logo">My API WebSite</a>
          <ul className="right">
            <li>
              <Link to="Home.js">Home</Link>
            </li>
            <li>
              <Link to="About.js">About</Link>
            </li>
            <li>
              <Link to="Contact.js">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
