# 📚 LMS Frontend

Welcome to the **frontend of the Learning Management System (LMS)** application.  
This project is built using **React + Vite** and provides a dynamic, responsive, and role-based user interface for both **students** and **administrators**.

The LMS allows administrators to **add and manage courses**, while students can **register for courses** seamlessly.

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd [your-project-folder]
   ```

## Install dependencies

    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

    ```bash
    npm run dev
    # or
    yarn dev
    ```

## Technology Stack

    React – Component-based UI library
    Vite – Fast build tool
    Tailwind CSS – Utility-first styling framework
    React Router Dom – Client-side routing
    Axios – API requests
    React Hot Toast – Elegant notifications
    React Icons – Icon packs

## Authentication & Role-Based Access

The application features a secure authentication system with role-based access.

🔐 Authentication Flow

Signup: New users register with email, name, password, and role (Student/Admin).
Login: Users log in; backend issues access and refresh tokens.
Protected Routes: Implemented with AuthContext & ProtectedRoutes.
Role-Based Sidebar: Navigation links adapt based on user role.
Logout: Clears session data and redirects to login.

👥 User Roles

**Admin**
Add / Manage Courses
View Registered Students

**Student**
Browse Courses
Register for Courses

## 📂 Project Structure

src/
├── api/ # API request functions
├── components/ # Reusable UI components
├── context/ # AuthContext & global state
├── pages/ # Application pages (Login, Signup, Dashboard, Courses)
├── App.jsx # Main application component
├── main.jsx # Entry point
└── styles/ # Tailwind & custom styles

## 👥 Contributors

    -Dishank Mahajan
    -Prathamesh Khatre
    -Sakshi Bhor
    -Shubhangi Ahire
   
