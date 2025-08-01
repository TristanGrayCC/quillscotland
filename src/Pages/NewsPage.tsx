import React from "react";
import HeaderMenu from "./HeaderMenu";
import { NavLink } from "react-router-dom";

function NewsPage() {
  return (
    <div className="App">
      <div className={"main-page"}>
        <HeaderMenu />
        <div className="news-page">
          <h2>News</h2>
          <div className="news-container">
            {
              //<div className="news-block">
              //<NavLink to="/News/AltFringe2025">
              //See Us at the Alt Fringe 2025
              //</NavLink>
              //<p>1st Aguust 2025</p>
              //</div>
            }
            <div className="news-block">
              <NavLink to="/News/VisaAndMastercard">
                Visa and Mastercard censor queer creators online
              </NavLink>
              <p>27th July 2025</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/TDOV2025">
                Trans Day of Visibility Readings 2025
              </NavLink>
              <p>26th February 2025</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/GlasgowPride2024">
                Statement on Glasgow Pride 2024
              </NavLink>
              <p>19th July 2024</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/TillySolidarity">
                Solidarity with Tilly Brooks
              </NavLink>
              <p>9th July 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
