const express = require('express');
const app = express();
const PORT = 3000;

// Serve static frontend from 'public'
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Site is live at http://localhost:${PORT}`);
});
