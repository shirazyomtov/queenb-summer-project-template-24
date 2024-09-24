import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import styles from "./styles/App.module.css";
import UserProvider from "./context/AuthContext.js"; // Import the UserContext
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <img
              src="/project-logo.png"
              alt="Logo"
              className={styles.appLogo}
            />
            <Navbar></Navbar>
          </header>
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2024 My App</p>
          </footer>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
