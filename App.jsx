import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>👋 Welcome to Mr. GREEN AGI</h1>
      <p>All equipped with tools for you. Just say <strong>"Go Commander."</strong></p>
      
      <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h3>🤖 Mr. GREEN Chatbot</h3>
        <iframe
          src="https://ai-bots.bangontrends.co.in/chat"
          width="100%"
          height="400"
          style={{ border: 'none' }}
          title="Mr. Green Chatbot"
        ></iframe>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h4>👤 Mr. GREEN Avatar</h4>
        <img 
          src="https://yourcdn.com/avatars/mr-green-neon-face.png" 
          alt="Mr. GREEN Avatar" 
          width="200"
        />
      </div>
    </div>
  );
}

export default App;
