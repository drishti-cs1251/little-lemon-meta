import React from "react";
import { FaInstagram, FaLine, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Little Lemon. All rights reserved.</p>
      <p style={styles.creator}>Created by Drishti Gupta</p>

      <div style={styles.contact}>
        <p><FaPhone style={styles.contactIcon} /> <a href="tel:+1234567890" style={styles.link}>+1 234 567 890</a></p>
        <p><FaEnvelope style={styles.contactIcon} /> <a href="mailto:info@littlelemon.com" style={styles.link}>info@littlelemon.com</a></p>
        <p><FaMapMarkerAlt style={styles.contactIcon} /> 123 Main Street, Springfield, USA</p>
      </div>

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
  creator: {
    marginTop: "0.25rem",
    fontSize: "0.8rem",
    color: "#6E4B3A",
    fontStyle: "italic",
  },
  contact: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  contactIcon: {
    marginRight: "0.5rem",
    verticalAlign: "middle",
  },
  link: {
    color: "#264653",
    textDecoration: "none",
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
