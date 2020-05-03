const User = require('../services/user');
module.exports = function auth(req, res, next) {
    const userId = req.session.userId;
    res.locals.currentUser = null;
    if (!userId) {
        return next();
    }
    const user = User.findUserById(userId);
    if (!user) {
        return next();
    }
    req.currentUser = user;
    res.locals.currentUser = user;
    next();
}