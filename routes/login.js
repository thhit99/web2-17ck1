const User = require('../services/user');
const { Router } = require('express');
const router = new Router();

router.get('/', function getLogin(req, res, next) {
    res.render('login');
});

router.post('/', function postLogin(req, res, next) {
    const user = User.findUserByEmail(req.body.email);
    // Khong tim thay user thi hien lai trang login //
    if (!user || !User.verifyPassword(req.body.password, user.password)) {
        return res.render('login');
    }

    req.session.userId = user.id;
    res.redirect('/');


});
module.exports = router;