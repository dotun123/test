import React, { useState } from 'react'
import {RiMenu3Line,RiCloseLine} from "react-icons/ri";
import profile from "./images/profile.png"
import "./navbar.css";



const Menu = ()=>(
    <>
      <p><a href="#home">Home</a></p>
  <p><a href="#dashboard">Dashboard</a></p>
  <p><a href="#wallet">Wallet</a></p>
  <p><a href="#services">Services</a></p>
    </>
  ) 
  





const Navbar = () => {
  
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className="mila__navbar">
        <div className="mila__navbar-links">
          <div className="mila__navbar-links_logo">
         <img src={profile}  alt='logo'/>
          </div>
          <div className="mila__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="mila__navbar-connect">
          <button type="button">Connect Wallet</button>
        </div>
        <div className="mila__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="mila__navbar-menu_container scale-up-center">
              <div className="mila__navbar-menu_container-links">
                <Menu />
                <div className="mila__navbar-menu_container-links-connect">
          <button type="button">Connect Wallet</button>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

export default Navbar;
