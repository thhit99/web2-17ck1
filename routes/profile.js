const { Router } = require('express');
const router = new Router();
const upload = require('../middlewares/upload');


router.get('/', function profile(req, res) {
    if (req.currentUser) {
        res.render('profile');
    } else {
        res.redirect('/');
    }
});
router.post('/', upload.single('avatar'), function(req, res, next) {
    console.log(req.file);
    res.render('profile');
});
module.exports = router;