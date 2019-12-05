const knex = require('./knex.js');
const express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');

function validUser(user) {
    const validEmail = typeof user.email == "string" &&
        user.email.trim() != '';
    const validPassword = typeof user.password == "string" &&
        user.password.trim() != '' &&
        user.password.trim().length >= 6;

    return validEmail && validPassword;
}

router.get('/', function (req, res) {
    knex.select().from('user').then(function (user) {
        res.send(user)
    })
})


router.post('/signup', function (req, res, next) {
    if (validUser(req.body)) {

        knex('user').insert({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12)
        })
            .then(function () {
                knex.select().from('user').then(function (user) {
                    res.send(user)
                })

            })
    } else {

        next(new Error('Invalid user'))
    }

});

router.post('/login', (req, res, next) => {

    if (validUser(req.body)) {
        knex.select().from('user').where({
            email: req.body.email
        })
            .then(function (user) {

                bcrypt.compare(req.body.password, user[0].password).then((result) => {
                    res.json({
                        result,
                        message: "password matched"
                    })
                })


            })

    } else {
        next(new Error('Invalid login.'))
    }
});

module.exports = router;