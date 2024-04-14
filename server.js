const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

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
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("Press  Ctrl+C to quit.")
});
