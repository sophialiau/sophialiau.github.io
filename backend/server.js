const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // let your frontend access this backend
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ msg: 'Connected to Node.js backend ✨' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
