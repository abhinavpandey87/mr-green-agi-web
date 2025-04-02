// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const agiMemory = [];

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working! - MR GREEN AGI' });
});

app.get('/api/agi/status', (req, res) => {
  res.json({
    agents_online: ['Planning-Agent', 'Memory-Agent', 'Reflection-Agent'],
    memory_entries: agiMemory.length,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/agi/thought', (req, res) => {
  const thoughts = [
    "Memory is not storage, it's reflection.",
    "Autonomy is clarity over noise.",
    "Learn from what you log.",
    "Green knows what silence means."
  ];
  res.json({ thought_of_the_day: thoughts[Math.floor(Math.random() * thoughts.length)] });
});

app.listen(PORT, () => {
  console.log(`MR GREEN AGI Backend running at http://localhost:${PORT}`);
});
