import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🍋 Little Lemon</div>
      <ul style={styles.navLinks}>
        <li><NavLink to="/" style={styles.link} activeStyle={styles.activeLink} end>Home</NavLink></li>
        <li><NavLink to="/menu" style={styles.link} activeStyle={styles.activeLink}>Menu</NavLink></li>
        <li><NavLink to="/booking" style={styles.link} activeStyle={styles.activeLink}>Book a Table</NavLink></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#FAF3EB",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #A8C686",
  },
  logo: {
    fontFamily: "'Sawarabi Mincho', serif",
    fontSize: "1.8rem",
    color: "#6E4B3A",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#264653",
    fontWeight: "600",
    fontSize: "1.1rem",
  },
  activeLink: {
    color: "#A8C686",
    borderBottom: "2px solid #A8C686",
  },
};

export default Navbar;
