const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// This guarantees it points to the right folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Handle 404 with cute fallback
app.use((req, res) => {
  res.status(404).send("404, but still slay 💅");
});

app.listen(PORT, () => {
  console.log(`✨ Website running at http://localhost:${PORT}`);
});
