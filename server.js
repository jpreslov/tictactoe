const express = require('express');
const app = express();


const port = 3000

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/app.js', (req, res) => res.sendFile(__dirname + '/app.js'));
app.get('/style.css', (req, res) => res.sendFile(__dirname + '/style.css'));
// app.get('/action_page.php', (req, res) => res.sendFile(__dirname + ''));

app.post('/game', (req, res) => {
    console.log(req.body.name)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))