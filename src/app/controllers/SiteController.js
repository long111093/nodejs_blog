const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] / news
    index(req, res) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
        // .then(courses => res.json(courses))
        // .catch(next) //.catch(error => next(error) )
    }

    //[GET] /search/:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;