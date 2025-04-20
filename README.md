# 🍽️ Digital Diner – Eatoes Internship Assignment

This is a full-stack mini restaurant ordering system developed as part of the Eatoes Internship Assessment. It allows users to browse a categorized menu, add items to a cart, and place pickup orders online. The frontend is deployed on Netlify, and the backend integrates both **MongoDB** and **PostgreSQL**.

### 🔗 Live Demo
👉 [https://minidigitaldiner.netlify.app/](https://minidigitaldiner.netlify.app/)

---

## 📁 Project Structure
digital-diner-eatoes/
├── backend/      # Node.js + Express + DB (MongoDB + PostgreSQL)
├── frontend/     # React App with state and routing
└── README.md     # Root README with setup, deployment, and full overview

---

## 🧾 Features

- 🍔 **Menu Display** – Categorized menu items from MongoDB
- 🛒 **Shopping Cart** – Add/remove items, dynamic total
- 📦 **Order Placement** – Submit contact details and order
- ✅ **Order Confirmation** – After successful placement
- 📜 **Order History** – View past orders using phone number

---
## 🧠 Tech Stack

| Area        | Tech Used                            |
|-------------|--------------------------------------|
| Frontend    | React, React Router, Context API     |
| Backend     | Node.js, Express                     |
| Databases   | MongoDB (menu), PostgreSQL (orders)  |
| Deployment  | Netlify (frontend), Render (backend) |

---

## 🧩 Database Design Justification

| Data               | Database    | Reason                                                                 |
|--------------------|-------------|------------------------------------------------------------------------|
| Menu Items         | MongoDB     | Flexible schema; allows dynamic categories and details                |
| Orders & User Info | PostgreSQL  | Relational data; structured format perfect for consistent querying    |

---

## ⚙️ Getting Started Locally

### 1️⃣ Backend Setup

```bash
git clone https://github.com/suryaprakash-Gadi/digital-diner-eatoes.git
cd digital-diner-eatoes/backend
npm install
