import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import styles from "./styles/App.module.css";
import AttractionOverviewPage from "./pages/AttractionOverviewPage/AttractionOverviewPage";
import UploadDataPage from "./pages/UploadDataPage/UploadDataPage";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src="/project-logo.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>
              Home
            </Link>
            <Link to="/login" className={styles.appLink}>
              Log In / Register
            </Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/attraction" element={<AttractionOverviewPage/>} />
            <Route path="/upload" element={<UploadDataPage/>} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
