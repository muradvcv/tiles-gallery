# 🧱 Tiles Gallery

## 📌 Project Overview

Tiles Gallery is a full-stack web application where users can log in, explore tiles (images), and manage their personal profiles. The project is built using modern technologies with a focus on performance and user experience.

---

## 🌐 Live Site

👉 https://tiles-gallery-zeta-one.vercel.app/

---

## 🚀 Key Features

* User authentication system (Login / Logout)
* Update user profile (name and profile image)
* Browse all tiles in a gallery view
* Protected routes (only logged-in users can access certain pages)
* Fully responsive design
* Fast performance with Next.js

---

## 🛠️ Technologies Used

**Frontend**

* Next.js
* React
* Tailwind CSS
* DaisyUI

**Backend**

* Better Auth
* MongoDB

---

## 📦 Packages

* next
* react
* react-dom
* tailwindcss
* daisyui
* mongodb
* better-auth
* react-icons

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_secret_key
```

---

## 🧑‍💻 Installation

```bash
git clone https://github.com/muradvcv/tiles-gallery
cd tiles-gallery
npm install
npm run dev
```

---

## 📁 Project Structure

```
app/
components/
lib/
public/
```

---

## 🔒 Authentication

* Users can log in using email/password or Google
* Session is stored securely
* Unauthorized users are redirected to the login page

---

## ✨ Future Improvements

* Image upload system (Cloudinary or ImgBB)
* Search and filter functionality
* Like/favorite system
* Full CRUD for tiles

---

## 👨‍💻 Author

Murad
GitHub: https://github.com/muradvcv

---

## ⭐ Note

This project helped me practice authentication, protected routes, and full-stack development using Next.js.
