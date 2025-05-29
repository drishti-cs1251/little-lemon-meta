import React from "react";

const About = () => {
  return (
    <section style={styles.aboutSection}>
      <h2>About Little Lemon</h2>
      <p>
        Nestled in the heart of serenity, Little Lemon offers an authentic Japanese tea experience blended with warm hospitality. Savor the flavors of tradition and nature with every bite and sip.
      </p>
    </section>
  );
};

const styles = {
  aboutSection: {
    maxWidth: "700px",
    margin: "3rem auto",
    padding: "0 1rem",
    fontFamily: "'Noto Sans JP', sans-serif",
    color: "#264653",
    lineHeight: "1.6",
  },
  h2: {
    fontFamily: "'Sawarabi Mincho', serif",
    color: "#6E4B3A",
    marginBottom: "1rem",
  },
};

export default About;
