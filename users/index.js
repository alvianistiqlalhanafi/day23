const express = require('express');
const app = express();
app.use(express.json());

let users = {};

// route get users
app.get('/users/', (req, res) => {
    res.send(users);
})

// route post users
app.post('/users/', (req,res) => {
    // this for list valid user
    const id = Math.floor(Math.random() * 10);
    // validate input new users
    if (Object.entries(req.body).length == 3 && 'fullName' in req.body && 'userName' in req.body && 'address' in req.body) {
        users[id] = req.body;
        res.send('Created a new users');
    }
    else {
        res.status(400);
        res.send('Invalid input body, body must have fullName, userName, address');
    }
})

// server port
app.listen(3000, () => {
    console.log('Server up and running in port 3000...')
})