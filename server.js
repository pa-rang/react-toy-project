const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/movies', (req, res) => {
    res.send("this is movies api");
});

app.listen(port, () => console.log(`Listening on port ${port}`));