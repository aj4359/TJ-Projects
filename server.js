// Load environment variables from a .env file (optional)
require('dotenv').config();

// Import necessary modules
const express = require('express'); // Express framework for building web applications
const path = require('path'); // Path module for handling file and directory paths

// Initialize Express app
const app = express();
const PORT = 3000; // Define the port number (can also use process.env.PORT if using environment variables)

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Mock API endpoint for creating a virtual card
app.post('/api/create-card', (req, res) => {
  // Mock data for a virtual card
  const mockCard = {
    id: 'mock-card-1234', // Mock card ID
    currency: 'USD', // Currency of the card
    type: 'virtual', // Type of the card
    last4: '1234', // Last four digits of the card number
    state: 'ACTIVE' // State of the card
  };
  res.json(mockCard); // Send the mock card data as a JSON response
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});