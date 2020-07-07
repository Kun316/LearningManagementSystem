const Course = require('../models/Course')

exports.updateCourseProcess = (req, res) => {
    const { id, name, description, photo, duration } = req.body

    Course.findOne({ _id: Object(id) })
        .then(course => {
            course.name = name
            course.description = description
            course.photo = photo
            course.duration = duration

            return course.save()
        })
        .then(course => {
            res.redirect('/course/listCourses')
        })
}

exports.createCourseProcess = (req, res) => {
    const { name, description, photo, duration } = req.body

    const course = new Course()
    course.name = name
    course.description = description
    course.photo = photo
    course.duration = Number(duration)

    course.save()
        .then(() => res.redirect('/courses/listCourses'))
        .catch(err => res.status(400).json(err))
}

exports.createCourse = (req, res) => {
    const data = {
        title: 'LMS | Add Course',
        errors: req.session.errors
    }

    req.session.errors = {}

    res.render('createCourse', data)
}

exports.listCourses = (req, res) => {
    Course.find()
        .then(courses => {
            const data = {
                title: 'LMS | List of Courses',
                courses
            }

            res.render('listCourses', data)
        })
        .catch(err => {
            res.json(err)
        })
}
