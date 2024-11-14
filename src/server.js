const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Handle JSON data
app.use(express.json());

// Basic route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
