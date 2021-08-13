var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TaskCollection = require('./model/task');

router.get('/getTask', (req, res) => {
    try {
        TaskCollection.find({}, (err, data) => {
            res.json({ data });
            res.status(200);
        })
    }
    catch (err) {
        next(err);
    };
});

router.post('/addTask', (req, res) => {
    try {
        var ta = new TaskCollection(req.body);
        ta.save();
        res.status(201).send(ta);
    } catch (err) {
        next(err);
    };
})


router.delete('/deleteTask/:id', (req, res) => {
    try {
        TaskCollection.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
            res.json({ data });
            res.status(200);
        }
        )
    }
    catch (err) {
        next(err);
    }
})



router.post('/updateTask', (req, res) => {
    try {
        let id = req.body.id;
        let task = req.body.task
        console.log(id)
        console.log(task)
        TaskCollection.findByIdAndUpdate({ _id: id }, { $set: { task: req.body.task } }, { new: true, useFindAndModify: false }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.json({ data });
                res.status(200);
            }

        }
        )


    } catch (err) {
        console.log(err)
    }


});




module.exports = router;