const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Look Ma, no hands ! I can do it, I mean, REALLY do it'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
