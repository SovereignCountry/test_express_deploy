const express = require('express');
const app = express();

// Define a route handler for the home route ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
const PORT = 6666;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});