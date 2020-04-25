module.exports = function(req, res) {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    const sum = a + b;
    res.render('sum', { a, b, sum });
};