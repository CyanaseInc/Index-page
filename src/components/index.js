
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../public/app.css";
import { styled } from "styletron-react";
import { Div, Button, Icon, Image } from "atomize";

const Navbar = () => {




  {/* Change navigation bar color on scroll*/ }
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <nav className={colorChange ? 'navscroll' : 'navigation'}>
        <span href="/" className="brand-name">
          Cyanase<span>Investors</span>
        </span>
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          {/* icon from heroicons.com */}
          <Icon name="Menu" size="20px" color="#fff" />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
          <ul class="boo">

            <li className={activeTab === "home" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("home");
            }}>
              <NavLink to="/home" >
                Home
              </NavLink>

            </li>
            <div class></div>
            <li className={activeTab === "product" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("product");
            }}>
              <NavLink to="/product" >
                Investment products
              </NavLink>
            </li>
            <li className={activeTab === "loan" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("loan");
            }}>
              <NavLink to="/loan" >
                Social loans
              </NavLink>
            </li>
            <li className={activeTab === "group" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("group");
            }}>
              <NavLink to="/group" >
                Group investments
              </NavLink>
            </li>
            <li className={activeTab === "students" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("students");
            }}>
              <NavLink to="/students" >
                Students
              </NavLink>
            </li>
            <li className={activeTab === "api" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("api");
            }}>
              <NavLink to="/api" >
                API
              </NavLink>
            </li>
            <li className={activeTab === "faq" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("faq");
            }}>
              <NavLink to="/faqs" >
                FAQs
              </NavLink>
            </li>

            <li className={activeTab === "contact" ? "activer" : ""} onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActiveTab("contact");
            }}>
              <NavLink to="/contact" >
                Contact us
              </NavLink>
            </li>

            <a href="https://play.google.com/store/apps/details?id=com.cyanase.investors">
            <li class="geta">

              <Button
                suffix={
                  <Icon
                    name="LongRight"
                    size="16px"
                    color="white"

                  />
                }
                shadow="3"
                hoverShadow="4"

              >
                Get App
              </Button>
            </li></a>


          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
