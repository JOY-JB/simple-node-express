const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

const port = 4000;

const users = [
    { id: 0, name: "joy", phone: '111111' },
    { id: 1, name: "joy1", phone: '111111' },
    { id: 2, name: "joy2", phone: '111111' },
    { id: 3, name: "joy3", phone: '111111' },
    { id: 4, name: "joy4", phone: '111111' },
    { id: 5, name: "joy5", phone: '111111' }
]

app.get('/', function (req, res) {
    res.send('wow this is my first node')
});

app.get('/users', function (req, res) {
    res.send(users);
});

app.post('/users', function (req, res) {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log("post is hitting");
    res.json(newUser);
});

app.get('/users/:id', function (req, res) {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.listen(port, () => {
    console.log("listening to port", port);
});