const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// Optional test route
app.get('/api/message', (req, res) => {
  res.json({ msg: 'Node backend still active! 💌' });
});

app.listen(PORT, () => {
  console.log(`Website live at http://localhost:${PORT}`);
});
