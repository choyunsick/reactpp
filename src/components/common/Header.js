import React from 'react'

import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";





export default function Header ({ type }) {
    const active = { color: "#000" };
    let logoURL = "";
    type === "main" ? (logoURL = "./img/logo_w.png") : (logoURL = "./img/logo_b.png");
  return (
    <header className={type}>

            <div id="header">
    <div className="inner">
        <h1>←FITNESS COMPANY→</h1>

        <nav className="menu">
            <ul id="main">
            <li>
                        <NavLink to="/Main" activeStyle={active}>
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/information" activeStyle={active}>
                            Information
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Service" activeStyle={active}>
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Youtube" activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Join" activeStyle={active}>
                            Join
                        </NavLink>
                    </li>
            </ul>
         </nav>
         <a href="#" className="cctvCall">
            <span>메뉴호출</span>
        </a>

        <nav className="menuMo">
            <h1>
                <a href="index.html">DECODELAB</a>
                <span>UI/UX DEVELOPMENT INSTITUTE</span>
            </h1>

            <ul id="gnbMo">
            <li>
                        <NavLink to="/Main" activeStyle={active}>
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/information" activeStyle={active}>
                            Information
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Service" activeStyle={active}>
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Youtube" activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Join" activeStyle={active}>
                            Join
                        </NavLink>
                    </li>
            </ul>
        </nav>
    </div>
</div>

            <FontAwesomeIcon icon={faBars} />
        </header>
  )
}

