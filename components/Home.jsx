import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Home Page</h1>
      <p>This is Home.jsx component</p>
      <button style={styles.button}>Click Me</button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
