import React from "react";
import MenuBar from "./menubar/menuBar";
import "./header.css";
import logo from "../../images/logo.jpg";
class Header extends React.Component {
  render() {
    let menus = [
      { key: "Explore More", id: 1 },
      { key: "Contact Us", id: 2 },
    ];

    return (
      <section className="header">
        <div className="header-title">
          <img src={logo} alt="logo" height="22" width="30" />
          <span className="header-text">Learn IT</span>
        </div>
        <div className="nav-bar">
          <nav>
            <MenuBar menus={menus}></MenuBar>
          </nav>
        </div>
        <ul className="right-bar">
          <li> Login</li>
          <li> Sing Up</li>
        </ul>
      </section>
    );
  }
}

export default Header;
