const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();

// SETTING UP THE MIDDLEWARE
app.use(cors());
app.use(express.json());

console.log("IN NODE FILE");

// SETTING UP MONGODB
const url = 'mongodb://127.0.0.1:27017'; // Fix the URL format
const dbName = 'project';
let db; // Declare db variable in the outer scope

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async (err) => {
  if (err) 
  {
    console.error(err);
    return;
  }

    let db = client.db(dbName); // Assign db inside connect callback
    console.log('Connected');
});

app.post('/Login', async (req, res) => {
  try {
    const { email_id, password } = req.body;

    if (!db) {
      return res.status(500).json({ message: 'Database connection error' });
    }

    const user = await db.collection('users').findOne({ email_id });

    if (!user || user.password !== password) 
    {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // const token = generateToken(email_id); // Assuming generateToken is defined
    // res.json({ token });

    else
    {
        console.log(user)
    }


  } 
catch (err) 
{
    console.error(err);
    res.status(500).json({ message: 'Server error' });
}
});

const port = 3000;
app.listen(port, () => {
  console.log(`Runningn port ${port}`);
});


