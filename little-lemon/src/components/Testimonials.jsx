import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    review: "A peaceful escape — the matcha and ambience were perfect.",
    rating: 4.5,
  },
  {
    name: "Meera Kapoor",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "Beautiful tea house vibe. The sakura tea stole my heart.",
    rating: 5,
  },
  {
    name: "Rajiv Menon",
    photo: "https://randomuser.me/api/portraits/men/66.jpg",
    review: "Exceptional service and flavors. The place and ambience is unforgettable.",
    rating: 4.8,
  },
  {
    name: "Priya Das",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    review: "The mochi was delightful and the green tea divine!",
    rating: 5,
  },
  {
  name: "Kavya Iyer",
  photo: "https://randomuser.me/api/portraits/women/79.jpg",
  review: "Loved the minimalist interior and subtle umami flavors. Truly calming!",
  rating: 4.7,
},
{
  name: "Neel Verma",
  photo: "https://randomuser.me/api/portraits/men/81.jpg",
  review: "An elegant place with authentic Japanese dishes. The miso soup was perfect.",
  rating: 5,
},

];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push("★");
  }
  if (hasHalfStar) stars.push("☆");

  return <span style={{ color: "#FFD700" }}>{stars.join(" ")}</span>;
};

const Testimonials = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>What Our Guests Say</h2>
      <div style={styles.cardGrid}>
        {testimonials.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.photo} alt={item.name} style={styles.image} />
            <h3 style={styles.name}>{item.name}</h3>
            <div style={styles.stars}><StarRating rating={item.rating} /></div>
            <p style={styles.review}>"{item.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: "#415A56",
    padding: "3rem 1rem",
    textAlign: "center",
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  heading: {
    color: "#fff",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontFamily: "'Sawarabi Mincho', serif",
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "1.5rem",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  name: {
    fontWeight: "bold",
    color: "#264653",
    marginBottom: "0.5rem",
  },
  stars: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  review: {
    fontStyle: "italic",
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.4",
  },
};

export default Testimonials;
