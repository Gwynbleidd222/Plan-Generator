# 💪 Plan Generator

A web application for personalized strength training planning using credits, workout generation, and user account management.

## 🌐 Live Demo

➡️ [View App on Vercel](https://plan-generator-coral.vercel.app/login)

---

## 🧠 About the Project

Plan Generator is a React-based web app designed to help users generate personalized **training plans** and **individual exercises** based on their weaknesses and goals.

It includes a **credit system**, secure **user authentication**, and the ability to **save generated plans** for future use.

While not a commercial product, the app is built to showcase **front-end engineering skills**, including React context management, Firebase integration, and Stripe-based payment simulation.

---

## 🚀 Key Features

### 🔐 Authentication
- User registration and login
- Protected routes with PrivateRoute logic
- Profile management: change email and password

### 🧠 Exercise Generator
- Select a weak point and training type
- Generates **one exercise** (costs **2 credits**)

### 🏋️ Plan Generator
- Select weaknesses in squat, bench, deadlift
- Choose a training scheme (e.g., 4 days FBW, 3 days FBW)
- Generates **full training plan** (costs **20 credits**)

### 📦 Credit System
- Credit-based usage model (2–20 credits per action)
- Credits stored in Firestore per user
- Includes **transaction history logic** and balance updates

### 💳 Stripe Integration (Simulation)
- Stripe checkout with 3 credit packages:
  - 20 credits (Starter)
  - 60 credits (Standard)
  - 120 credits (Pro)
- Simulated checkout with dynamic redirect and credit addition on success

### 📁 Saved Plans
- Displays previously generated training plans
- Plans are saved per user in Firestore

### 👤 User Profile
- Update email and password
- Logout button in navigation

---

## 🛠️ Technologies Used

- ⚛️ **React** with functional components and hooks
- 🌐 **React Router v6** for routing
- 🔥 **Firebase Auth & Firestore** for backend and auth
- 💳 **Stripe (Test Mode)** for payment simulation
- 🧠 **React Context API** for state management
- 🎨 **Tailwind CSS** for styling
- 📦 **Vercel** for deployment

---

## 📷 Screenshots (Optional)

_Add some screenshots here to show off the UI/UX!_

```md
![Login Page](/Exercise-Generator/src/assets/login.jpg)
![Plan Generator](/Exercise-Generator/src/assets/Plan-Generator.jpg)

## 💡 Inspiration

The idea for this app was originally inspired by a https://www.facebook.com/ExerciseGenerator project from 2022, which has since been abandoned. The original creators are no longer active, and the official page and social media presence are inactive.

This version was built **from scratch** as a personal project to improve full-stack development skills and present a modern, clean, and fully working version of the concept. Screenshots and short videos from the original app served as a loose reference point.

# Clone the repo
git clone https://github.com/Gwynbleidd222/Plan-Generator

# Install dependencies
npm install

# Add your environment variables in a `.env` file:
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_STRIPE_PUBLIC_KEY=...

# Start dev server
npm run dev