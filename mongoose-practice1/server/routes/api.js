const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})
router.post('/person', function (req, res) {
    let person = new Person({firstName: req.body.firstName,
        lastName: req.body.lastName,
        age:req.body.age})
    person.save()
    res.end()
})

router.put('/person/:id',function(req,res){
    let personId = req.params.id
    Person.findByIdAndUpdate(personId, { age: 80 }, function (err, person) {
        console.log(person)
        res.end()
    })
    
})

router.delete('/apocalypse',function(req,res){
    Person.deleteMany({}).
    res.end()
})
module.exports = router
