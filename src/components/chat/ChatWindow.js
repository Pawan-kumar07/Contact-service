import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatWindow.module.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: "m1",
      role: "agent",
      text: "Hello, I am a virtual assistant. I can help you connect with a live agent or display some self-help options. Please let me know your query.",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages.length]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text: value },
    ]);
    setInput("");

    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "agent",
          text: "Thanks! A specialist will review and get back to you shortly.",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }, 600);
  };

  return (
    <section className={styles.container}>
      <div ref={listRef} className={styles.chatArea}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${styles.messageGroup} ${
              m.role === "user" ? styles.messageGroupUser : ""
            }`}
          >
            <div
              className={`${styles.messageBubble} ${
                m.role === "user"
                  ? styles.messageBubbleUser
                  : styles.messageBubbleAgent
              }`}
            >
              <p className={styles.messageText}>{m.text}</p>
              {m.time && <p className={styles.messageTime}>{m.time}</p>}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your query here"
            className={styles.textarea}
          />
          <button
            type="submit"
            className={styles.submitBtn}
            aria-label="Submit"
          >
            <span className={styles.submitIcon}>➤</span>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChatWindow;
