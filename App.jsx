import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>👋 Welcome to <span style={{ color: "limegreen" }}>Mr. GREEN AGI</span></h1>
      <p style={{ marginBottom: "2rem" }}>Your intelligent assistant is now live.</p>

      {/* Chatbot iframe widget */}
      <iframe
        src="https://ai-bots.bangontrends.co.in/chatbot"
        title="Mr. Green Chat"
        width="100%"
        height="600px"
        style={{
          border: "2px solid #00ff99",
          borderRadius: "12px",
          backgroundColor: "#f0fff0",
          boxShadow: "0px 0px 20px limegreen"
        }}
      ></iframe>
    </div>
  );
}

export default App;
