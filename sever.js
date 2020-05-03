const express = require('express');
const bodyParser = require('body-parser');
var cookieSession = require('cookie-session');


const port = process.env.PORT || 3000;
const app = express();


app.use(cookieSession({
    name: 'session',
    keys: ['123456'],
    maxAge: 24 * 60 * 60 * 1000,
}))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
//Middle warses
app.use(require('./middlewares/auth'));
//Routes
app.get('/', require('./routes/index'));

app.use('/login', require('./routes/login'));

app.get('/logout', require('./routes/logout'));
app.use('/profile', require('./routes/profile'));

app.use(express.static('public'));
app.listen(port);
console.log(` Sever is listenning on port   ${port} `);