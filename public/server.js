const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'src')));

// Define a catch-all route that sends all requests to index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running on port 3000');
});
