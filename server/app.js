import express from "express";
import config from "config";
import "./utils/db_connect.js";

// Create an Express application
const app = express();
const PORT = config.get("PORT") || 5000;

// Define a simple route
app.get('/', (req,res) => {
    res.send(`SERVER IS RUNNING AT ${PORT}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT ${PORT}`);
  });