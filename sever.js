const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    const name = req.query.name || ' World ';
    res.end(` Hello ${name} from express `);
});

app.get('/hello', function(req, res) {
    res.end('Hello Router ');
});

app.get('/covid19', function(req, res) {
    res.render('covid19');
});
app.use(express.static('public'));
app.listen(port);
console.log(` Sever is listenning on port   ${port} `);