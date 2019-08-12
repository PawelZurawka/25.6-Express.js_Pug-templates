var express = require('express');
var app = express();

app.use(express.static('css'));
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/auth/google', function(req, res) {
  res.render('authorization', {
    email: req.query.email,
    password: req.query.password
  });
});

app.get('/logged', function(req, res) {
  res.render('logged');
});

var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    'Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port
  );
});

app.use(function(req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
  console.log('Błąd 404');
});
