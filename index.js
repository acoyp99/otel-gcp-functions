// index.js
const express = require('express');

const app = express();

app.get('/helloWorld', (req, res) => {
  // Get the 'name' parameter from the request
  const name = req.query.name || 'World';

  // Check if the 'name' parameter is 'error'
  if (name.toLowerCase() === 'error') {
    // Return a 500 Internal Server Error
    res.status(500).json({ error: 'Internal Server Error' });
  } else if (name.toLowerCase() === 'unauthorized') {
    // Return a 401 Unauthorized error
    res.status(401).json({ error: 'Unauthorized' });
  } else if (name.toLowerCase() === 'badrequest') {
    // Return a 400 Bad Request error
    res.status(400).json({ error: 'Bad Request' });
  } else {
    // Send a JSON response with a personalized greeting
    res.status(200).json({ message: `Hello, ${name}!` });
  }
});

// Start the Express app on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export for Cloud Function deployment
exports.app = app;
