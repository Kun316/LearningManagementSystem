const express = require('express')
const router = express.Router()

const CourseController = require('../controllers/CourseController')
const CourseValidator = require('../controllers/CourseValidator')
const CourseDeleted = require('../controllers/DeleteController')
//UI Routes
router.get('/listCourses', CourseController.listCourses)
router.get('/createCourse', CourseController.createCourse)
router.get('/updateCourse/:id', (req, res) => res.send('List Courses Works!'))

//Process
router.post('/createCourse', CourseValidator.createCourseValidator, CourseController.createCourseProcess)
router.post('/updateCourse/:id', (req, res) => res.send('List Courses Works!'))
router.get('/deleteCourse', CourseDeleted.deleteCourse)

module.exports = router
