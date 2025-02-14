var express = require('express');
var _ = require('underscore');
var router = express();

var mongoose = require('mongoose');
var Teacher = mongoose.model('Teacher');
var Course = mongoose.model('Course');

async function getTeachers(req, res){
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teachers', error: error.message });
    }
}

function addTeacher(req, res) {
    var teacher = new Teacher(req.body);
    console.log(req.body);
    teacher
        .save()
        .then(savedTeacher => {
            res.status(201).json(savedTeacher)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.message })
        });
}

// Routing
router.route('/')
	.get(getTeachers)
	.post(addTeacher);

// Export
module.exports = router;
