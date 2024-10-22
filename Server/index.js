const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo'); // Ensure the correct path to your Todo model

dotenv.config()

//connect to the database
mongoose.connect(process.env.MONGODB_URI)


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection: Replace <db_password> with your actual password
// mongoose.connect('mongodb+srv://brabba:Rabi@2020@sei.njgvx.mongodb.net/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

// Get all todos
app.get('/get', (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

// Update a todo (mark as done)
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate(id, { done: true }, { new: true })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

// Delete a todo by ID
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

// Add a new todo
app.post('/add', (req, res) => {
  const { task } = req.body;
  TodoModel.create({ task })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
