# Little Lemon Restaurant Website

A modern, responsive restaurant website built with React.  
The app features multiple components organized into three main pages: Home, Booking, and Menu.

---

## Features

- **Home Page:**  
  Showcases About section, Testimonials, and general info about the restaurant.

- **Booking Page:**  
  Contains a Booking Form for customers to reserve tables easily.

- **Menu Page:**  
  Displays the restaurant’s menu items dynamically.

- **Common Components:**  
  - Navbar with navigation links  
  - Footer with contact details, social media, and creator credit

---

## Components Overview

- **Navbar:** Responsive navigation bar with links to all pages.  
- **About:** Restaurant background and story section.  
- **BookingForm:** Form for booking tables with validation.  
- **Footer:** Contact info, address, social links, and creator tag.  
- **Menu:** Displays menu items, categorized and styled.  
- **Testimonials:** Customer reviews and feedback section.

---

## Project Structure

src/
│
├── components/
│ ├── About.jsx
│ ├── BookingForm.jsx
│ ├── Footer.jsx
│ ├── Menu.jsx
│ ├── Navbar.jsx
│ └── Testimonials.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Booking.jsx
│ └── MenuPage.jsx
│
├── App.jsx
└── index.js


---

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/little-lemon-restaurant.git
Navigate to the project folder:

bash
Copy code
cd little-lemon-restaurant
Install dependencies:

bash
Copy code
npm install
Usage
Run the development server:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to see the app.

How to Navigate
Home: Overview, About, and Testimonials

Booking: Fill out the form to reserve a table

Menu: Browse the menu offerings

Customization
Update contact info, social media links, and creator tag in Footer.jsx.

Modify menu items in Menu.jsx.

Adjust form fields and validation in BookingForm.jsx.

Style components via your preferred CSS or CSS-in-JS method.

Technologies Used
React

React Router (if routing is used for pages)

React Icons for social and UI icons

CSS Modules / Inline CSS / Styled Components