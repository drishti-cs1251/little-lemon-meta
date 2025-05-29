import React from "react";
import { FaInstagram, FaLine, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Little Lemon. All rights reserved.</p>
      <div style={styles.socialIcons}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.icon}><FaInstagram /></a>
        <a href="https://line.me" target="_blank" rel="noreferrer" style={styles.icon}><FaLine /></a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={styles.icon}><FaMapMarkerAlt /></a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#FAF3EB",
    color: "#264653",
    textAlign: "center",
    padding: "1rem 0",
    borderTop: "1px solid #A8C686",
    fontSize: "0.9rem",
  },
  socialIcons: {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    fontSize: "1.5rem",
  },
  icon: {
    color: "#264653",
    transition: "color 0.3s",
  },
};

export default Footer;
