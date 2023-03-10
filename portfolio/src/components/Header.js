import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="headerAndNavContainer">
      <div style={styles.headerAndNavContent} className="headerAndNavContent">
        <div style={styles.headerContainer} className="headerContainer">
          <div style={styles.headerContent} className="headerContent">
            <h3 style={{ color: "white" }} className="siteName">
              jennifer blacutt
            </h3>
          </div>
        </div>
        <div style={styles.navContainer} className="navContainer">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Header;
