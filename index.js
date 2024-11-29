const express = require("express");
const app = express();

app.use(express.json());

// GET endpoint for documentation
app.get("/api/reverse", (req, res) => {
  res.json({
    description: "Reverses a given string.",
    input: {
      type: "string",
      description: "The string to reverse.",
      example: "Hello, world!",
    },
    output: {
      type: "string",
      description: "The reversed string.",
      example: "!dlrow ,olleH",
    },
  });
});

// POST endpoint for string reversal
app.post("/api/reverse", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.status(400).json({ error: "Input must be a string." });
  }

  const reversedString = input.split("").reverse().join("");
  res.json({ output: reversedString });
});

// Start server (for local testing)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // For Vercel to handle the server
