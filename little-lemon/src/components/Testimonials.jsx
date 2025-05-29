import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sakura Tanaka",
    text: "The atmosphere at Little Lemon takes me straight to a peaceful Japanese garden. The matcha latte is divine!",
  },
  {
    id: 2,
    name: "Kenji Yamamoto",
    text: "Authentic taste and wonderful service. I keep coming back every week!",
  },
  {
    id: 3,
    name: "Maya Singh",
    text: "Love the warm, natural vibe here. The cherry blossom decor is so calming.",
  },
];

const Testimonials = () => {
  return (
    <section style={styles.testimonialSection}>
      <h2 style={styles.heading}>What Our Customers Say</h2>
      {testimonials.map(({ id, name, text }) => (
        <blockquote key={id} style={styles.blockquote}>
          <p>"{text}"</p>
          <footer style={styles.footer}>— {name}</footer>
        </blockquote>
      ))}
    </section>
  );
};

const styles = {
  testimonialSection: {
    maxWidth: "700px",
    margin: "3rem auto",
    padding: "0 1rem",
  },
  heading: {
    fontFamily: "'Sawarabi Mincho', serif",
    color: "#6E4B3A",
    marginBottom: "2rem",
    textAlign: "center",
  },
  blockquote: {
    backgroundColor: "#FAF3EB",
    borderLeft: "6px solid #F8C8DC",
    padding: "1rem 2rem",
    fontStyle: "italic",
    marginBottom: "1.5rem",
    fontFamily: "'Noto Sans JP', sans-serif",
    color: "#264653",
  },
  footer: {
    marginTop: "0.5rem",
    fontWeight: "700",
    textAlign: "right",
    color: "#6E4B3A",
  },
};

export default Testimonials;
