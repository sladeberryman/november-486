const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`MIKE app listening on port ${port}`)
})