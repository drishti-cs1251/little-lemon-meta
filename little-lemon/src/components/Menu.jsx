import React from "react";

const menuItems = [
  {
    id: 1,
    title: "Matcha Latte",
    description: "Creamy matcha green tea latte with frothy milk.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Sakura Mochi",
    description: "Traditional cherry blossom rice cake wrapped in pickled leaf.",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Sencha Green Tea",
    description: "Freshly brewed sencha leaves for a pure green tea taste.",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
];

const Menu = () => {
  return (
    <section style={styles.menuSection}>
      <h2 style={styles.heading}>Our Menu</h2>
      <div style={styles.menuGrid}>
        {menuItems.map(({ id, title, description, price, image }) => (
          <div key={id} style={styles.card}>
            <img src={image} alt={title} style={styles.img} />
            <div>
              <h3 style={styles.itemTitle}>{title}</h3>
              <p style={styles.desc}>{description}</p>
              <p style={styles.price}>{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  menuSection: {
    maxWidth: "900px",
    margin: "3rem auto",
    padding: "0 1rem",
  },
  heading: {
    fontFamily: "'Sawarabi Mincho', serif",
    color: "#6E4B3A",
    marginBottom: "2rem",
    textAlign: "center",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  card: {
    border: "1px solid #A8C686",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#FAF3EB",
    boxSizing: "border-box",
  },
  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  itemTitle: {
    fontFamily: "'Sawarabi Mincho', serif",
    color: "#264653",
    margin: "1rem 0 0.5rem 0",
  },
  desc: {
    fontFamily: "'Noto Sans JP', sans-serif",
    color: "#6E4B3A",
    marginBottom: "0.5rem",
    padding: "0 1rem",
  },
  price: {
    fontWeight: "700",
    color: "#A8C686",
    padding: "0 1rem 1rem 1rem",
  },
};

export default Menu;
