module.exports = function logout(req, res) {
    delete req.session.userId;
    res.redirect('/');
}