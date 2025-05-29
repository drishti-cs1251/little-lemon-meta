import React from "react";

const About = () => {
  return (
    <section style={styles.aboutSection}>
      <h2 style={styles.heading}>About Little Lemon</h2>
      <p>
        Nestled in a quiet corner of the city, <strong>Little Lemon</strong> brings the spirit of Japan to life through its serene ambiance and authentic cuisine. Inspired by traditional tea houses, our café offers a calming space where elegance meets simplicity.
      </p>
      <p>
        From freshly rolled sushi and steaming bowls of ramen to seasonal matcha desserts and sakura-inspired teas, every dish is crafted with harmony and care. Our interior blends warm cedar accents, rice paper textures, and subtle floral decor to create a peaceful retreat for all our guests.
      </p>
      <p>
        Whether you're here for a quiet cup of tea, a wholesome meal, or a gathering with friends, we welcome you to experience the timeless grace of Japanese hospitality — right here at Little Lemon.
      </p>
    </section>
  );
};

const styles = {
  aboutSection: {
    
    margin: "3rem auto",
    padding: "0 1rem",
    fontFamily: "'Noto Sans JP', sans-serif",
    color: "#264653", // Indigo Blue
    lineHeight: "1.7",
    backgroundColor: "#FAF3EB", // Washed White
    borderRadius: "12px",
  },
  heading: {
    fontFamily: "'Sawarabi Mincho', serif",
    color: "#6E4B3A", // Cedar Brown
    fontSize: "2rem",
    marginBottom: "1rem",
  },
};

export default About;
