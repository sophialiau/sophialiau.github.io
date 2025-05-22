const express = require('express');
const router = express.Router();

/**
 * This file can be used to create API endpoints for your interactive projects
 * For example, you could add backend functionality for Conway's Game of Life
 * to save and share patterns, track statistics, etc.
 */

// Example route that returns information about available projects
router.get('/', (req, res) => {
  const projects = [
    {
      id: 'conway',
      name: "Conway's Game of Life",
      description: "Interactive implementation of Conway's Game of Life cellular automaton"
    },
    // Add more projects here as they are developed
  ];
  
  res.json(projects);
});

// Example route for a specific project (e.g., Conway's Game of Life)
router.get('/conway', (req, res) => {
  res.json({
    name: "Conway's Game of Life",
    description: "Interactive implementation of Conway's Game of Life cellular automaton",
    patterns: [
      {
        name: "Glider",
        description: "A simple glider pattern that moves diagonally"
      },
      {
        name: "Gosper Glider Gun",
        description: "Creates a stream of gliders"
      }
    ]
  });
});

module.exports = router;