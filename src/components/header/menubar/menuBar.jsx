import React from "react";
import './menuBar.css'
class MenuBar extends React.Component {
 
  render() {
    const menus = this.props.menus;
    const menuItems = menus.map((menu) =>
      <li key={menu.id}>{menu.key}</li>
    );
    return (
      <ul className='menu-bar'>
       {menuItems}
      </ul>
    );
  }
}

export default MenuBar;
