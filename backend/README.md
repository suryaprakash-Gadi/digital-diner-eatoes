# 🚀 Backend – Digital Diner | Eatoes Assignment

This is the backend for the **Digital Diner** web application. It’s built with **Node.js** and **Express**, and connects to **MongoDB** and **PostgreSQL** databases. It handles APIs for menu display, order creation, and viewing order history.

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB (for menu data)
- PostgreSQL (for orders and user data)
- Sequelize (ORM for PostgreSQL)
- Mongoose (ODM for MongoDB)
- dotenv
- CORS

---
##   Folder Structure
backend/
├── controllers/         # Request logic (e.g., order, menu)
├── db/                  # DB connection config for PostgreSQL & MongoDB
├── models/              # Sequelize and Mongoose models
├── routes/              # Express routes
├── server.js            # Entry point of the server
└── .env                 # Environment variables


## 🌐 API Base URL
http://localhost:5000/api
---

## 📦 API Endpoints

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/menu`                | Fetch all menu items from MongoDB    |
| POST   | `/order`               | Submit an order (name, phone, cart)  |
| GET    | `/order/:phone`        | Retrieve past orders by phone number |

---
## 🧩 Database Design

### 🥗 MongoDB
- **Used for:** Menu Items
- **Why?**
  - Flexible schema
  - Easy to structure nested data like categories, ingredients, options
  - Easily scalable for future menu changes

### 📝 PostgreSQL
- **Used for:** Orders and User Information
- **Why?**
  - Relational structure supports structured and consistent queries
  - Ideal for linking user info with their multiple orders
  - Ensures data integrity and validation with strong schema


### 1️⃣ Clone the Repository & Navigate

```bash
git clone https://github.com/suryaprakash-Gadi/digital-diner-eatoes.git
cd digital-diner-eatoes/backend
