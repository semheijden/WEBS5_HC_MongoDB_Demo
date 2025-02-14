const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    _id: String,
    firstname: { type: String, required: true },
    middleware: { type: String, required: false },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    courses: { type: [String], default: [] },
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
