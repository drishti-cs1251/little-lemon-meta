import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format date to Japanese style YYYY年MM月DD日
    const formattedDate = formData.date
      ? new Date(formData.date).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).replace(/\//g, "年").replace(/年(\d{2})$/, "月$1日")
      : "";

    alert(`予約が確定しました！\n
    名前: ${formData.name}
    メール: ${formData.email}
    日付: ${formattedDate}
    時間: ${formData.time}
    ゲスト数: ${formData.guests}`);

    console.log("Booking Data:", formData);
    setFormData({ name: "", email: "", date: "", time: "", guests: 1 });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="number"
        name="guests"
        value={formData.guests}
        min="1"
        max="10"
        onChange={handleChange}
        required
        style={styles.input}
      />
      <button type="submit" className="button" style={styles.button}>
        Book Table
      </button>
    </form>
  );
};

const styles = {
  form: {
    
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#FAF3EB",
    padding: "2rem",
    borderRadius: "16px",
    border: "1px solid #A8C686",
  },
  input: {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #A8C686",
    fontSize: "1rem",
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  button: {
    backgroundColor: "#A8C686",
    color: "white",
    border: "none",
    padding: "0.75rem 1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1.1rem",
    transition: "background 0.3s ease",
  },
};

export default BookingForm;
