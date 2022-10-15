const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()

//view all: select * from student
router.get('/', (req, res) => {
        StudentModel.find((err, data) => {
            if (!err) {
                res.json(data)
            }
        })
    })
    //test : http://localhost:3000/api

//view by id : select * from student where _id = 'id'
router.get('/:id', (req, res) => {
        StudentModel.findById(req.params.id, (err, data) => {
            if (!err) {
                res.json(data)
            }
        })
    })
    //test: http://localhost:3000/api/634a5c50bfb8e0e28482c2be

//delete: delete from student where _id = 'id'
router.delete('/delete/:id', (req, res) => {
    StudentModel.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            //res.send("Delete student succeed !")
            res.json({ "message": "delete student succceed" })
        }
    })
})

//  test: http://localhost:3000/api/delete/634a5c50bfb8e0e28482c2be

//add: insert (...) values (...) into student 
router.post('/', (req, res) => {
    StudentModel.create(req.body, (err, data) => {
        if (!err) {
            res.json(data)
        }
    })
})

//test:


//update: update from student where _id = "id"
router.put('/:id', (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, req.body,
        (err, data) => {
            if (!err) {
                res.json(data)
            }
        })
})


module.exports = router