const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
=======
>>>>>>> origin/master

const app = express();
const port = process.env.PORT || 8080;

<<<<<<< HEAD
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MyFinBank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import User model
/* const User = require('./models/User');

app.use(cors());
app.use(bodyParser.json());

// Register User
app.post('/api/register', async (req, res) => {
  try {
    const { username, password, email, fullName } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      username,
      password: hashedPassword,
      email,
      fullName,
      status: 'active',
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await user.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error });
  }
});

// Login User
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      'YOUR_SECRET_KEY',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Failed to login', error });
  }
});
*/
// Banking Operations
app.post('/api/deposit', async (req, res) => {
  res.send({ messages: [{ type: 'info', content: 'Deposit successful' }] });
});

app.post('/api/withdraw', async (req, res) => {
  res.send({ messages: [{ type: 'success', content: 'Withdraw successful' }] });
});

app.post('/api/transfer', async (req, res) => {
  res.send({ messages: [{ type: 'success', content: 'Funds transferred successfully' }] });
});

app.post('/api/transfer-loan', async (req, res) => {
  res.send({ messages: [{ type: 'success', content: 'Transfer to loan successful' }] });
});

app.post('/api/transfer-recurring-deposit', async (req, res) => {
  res.send({ messages: [{ type: 'success', content: 'Transfer to recurring deposit successful' }] });
});

app.post('/api/transfer-fixed-deposit', async (req, res) => {
  res.send({ messages: [{ type: 'success', content: 'Transfer to fixed deposit successful' }] });
=======
app.use(cors());
app.use(bodyParser.json());

app.post('/api/deposit', (req, res) => {
  const amount = req.body.amount;
  res.send({ messages: [{ type: 'info', content: 'Deposit successful' }], amount });
});
app.post('/api/withdraw', (req, res) => {
  const amount = req.body.amount;
  res.send({ messages: [{ type: 'success', content: 'Withdraw successful' }], amount });
});

app.post('/api/transfer', (req, res) => {
  const amount = req.body.amount;
  const recipient = req.body.recipient;
  res.send({ messages: [{ type: 'success', content: 'Funds transferred successfully' }], amount, recipient });
});


app.post('/api/transfer-loan', (req, res) => {
  const amount = req.body.amount;
  res.send({ messages: [{ type: 'success', content: 'Transfer to loan successful' }], amount });
});

app.post('/api/transfer-recurring-deposit', (req, res) => {
  const amount = req.body.amount;
  res.send({ messages: [{ type: 'success', content: 'Transfer to recurring deposit successful' }], amount });
});

app.post('/api/transfer-fixed-deposit', (req, res) => {
  const amount = req.body.amount;
  res.send({ messages: [{ type: 'success', content: 'Transfer to fixed deposit successful' }], amount });
>>>>>>> origin/master
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("Press  Ctrl+C to quit.")
});
