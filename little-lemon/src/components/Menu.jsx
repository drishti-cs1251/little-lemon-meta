import React from "react";

const menuItems = [
  {
    id: 1,
    title: "Matcha Latte",
    description: "Creamy matcha green tea latte with frothy milk.",
    price: "$5.00",
    image: "https://i.pinimg.com/736x/37/2f/d0/372fd0a42ef60809bfce82506105f053.jpg",
  },
  {
    id: 2,
    title: "Sakura Mochi",
    description: "Traditional cherry blossom rice cake wrapped in pickled leaf.",
    price: "$4.00",
    image: "https://i.pinimg.com/736x/0e/9f/63/0e9f63caff0f70a6a29757cbe7cbd47c.jpg",
  },
  {
    id: 3,
    title: "Sencha Green Tea",
    description: "Freshly brewed sencha leaves for a pure green tea taste.",
    price: "$3.00",
    image: "https://i.pinimg.com/736x/91/ee/20/91ee2053cbd56a8f246b0893466fd17d.jpg",
  },
  {
    id: 4,
    title: "Yuzu Citrus Soda",
    description: "Refreshing soda infused with zesty yuzu citrus flavors.",
    price: "$4.50",
    image: "https://i.pinimg.com/736x/01/b3/e7/01b3e7b569e3d12cc3243c1d68a62546.jpg",
  },
  {
    id: 5,
    title: "Miso Soup",
    description: "Warm and comforting soup with tofu, seaweed, and green onions.",
    price: "$3.50",
    image: "https://i.pinimg.com/736x/9a/bf/1a/9abf1a21c8e7919c94f08f7b8c75cf7b.jpg",
  },
  {
    id: 6,
    title: "Green Tea Ice Cream",
    description: "Creamy, sweet green tea flavored ice cream.",
    price: "$4.00",
    image: "https://i.pinimg.com/736x/10/5e/47/105e478e793b0ed07cf1527007000752.jpg",
  },
  {
    id: 7,
    title: "Taiyaki (Fish-shaped Cake)",
    description: "Sweet red bean-filled fish-shaped cake, fresh and warm.",
    price: "$3.75",
    image: "https://i.pinimg.com/736x/e3/6e/4b/e36e4bce6bc1ebe8c1d69f084fdc64d1.jpg",
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
