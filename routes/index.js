const User = require('../services/user');
module.exports = function index(req, res) {
    req.session.views = (req.session.views || 0) + 1;
    res.render('index', { views: req.session.views });
};