const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', require('./routes/index'));
app.post('/sum', require('./routes/sum'));

app.get('/hello', function(req, res) {
    res.end('Hello Router ');
});

app.use(express.static('public'));
app.listen(port);
console.log(` Sever is listenning on port   ${port} `);