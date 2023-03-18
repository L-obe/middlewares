const admins = ['Greta', 'Ada', 'Tim', 'Vim', "Lobe"]

module.exports = (req, res, next) => {

    if(admins.includes(req.query.admin)) {
        next();
    };

    return res.redirect('/')

};