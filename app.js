const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files (index.html)
app.use(express.static(path.join(__dirname)));

// API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js running on EC2 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
