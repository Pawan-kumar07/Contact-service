import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  const location = useLocation();

  const menuItems = [
    { label: "Interaction history", path: "/history" },
    { label: "Chat history", path: "/chat-history" },
    { label: "Scheduled calls", path: "/scheduled" },
    { label: "Give user feedback", path: "/feedback" },
  ];

  return (
    <div className={styles.root}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerTop}>
            <Link to="/" className={styles.newChatBtn}>
              <span>+</span> New chat
            </Link>
            <h1 className={styles.title}>Contact Service</h1>
            <div className={styles.userArea}>
              <span>Repair Pavani</span>
              <button className={styles.logoutBtn} aria-label="Logout">
                ⊕
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={styles.nav}>
            <div className={styles.navSpacer} />
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${
                  location.pathname === item.path ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
