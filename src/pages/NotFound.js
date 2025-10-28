import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Oops! Page not found</p>
        <Link to="/" className={styles.link}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
