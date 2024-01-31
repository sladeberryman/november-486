const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

let path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


let myTypeServer = "Reformer";

app.get('/', function(req, res) {

  res.render('index', {
   
    myTypeClient: myTypeServer 

  });
  
});

app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
  console.log(`nov app listening on port ${port}`)
})