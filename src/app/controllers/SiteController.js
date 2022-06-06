const Course = require('../models/Course');

class SiteController{
    // [GET] / news
    index(req, res){
        Course.find({}, function(err, course){
            if(!err) {
                res.json(course)
            } else {
                res.status(400).json({error: 'ERROR!!!'})
            }
        })
    }

    //[GET] /search/:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;