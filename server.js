const express = require('express');
const app = express();
const PORT = 3000;

// Sample words to build random todos
const actions = ["Buy", "Read", "Write", "Fix", "Clean", "Create", "Study", "Watch"];
const subjects = ["book", "email", "project", "car", "house", "report", "movie", "assignment"];

// Function to generate a single random todo
const generateRandomTodo = (id) => {
    const action = actions[Math.floor(Math.random() * actions.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    return {
        id,
        title: `${action} a ${subject}`,
        completed: Math.random() < 0.5
    };
};

// Route to get a list of N random todos
app.get('/todos', (req, res) => {
    const count = parseInt(req.query.count) || 5; // ?count=10
    const todos = Array.from({ length: count }, (_, i) => generateRandomTodo(i + 1));
    res.json(todos);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
