const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const keys = require('../config/keys')
const passport = require('passport')

const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

const User = require('../models/User')


router.post('/register',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        if (req.user.role !== 'Administrator')
            return res.status(400).json({
                noAuth: 'You must be an Administrator to regsiter a user.'
            })

        const {
            errors,
            isValid
        } = validateRegisterInput(req.body.user)
        if (!isValid)
            return res.status(400).json(errors)

        User.findOne({
            email: req.body.email
        }).then(user => {
            if (user) {
                return res.status(400).json({
                    email: "Email already exists"
                })
            } else {
                const newUser = new User({
                    name: req.body.user.name,
                    username: req.body.user.username,
                    email: req.body.user.email,
                    password: req.body.user.password,
                    role: req.body.user.role
                })
                if(req.body.user.color)
                    newUser.color = req.body.user.color

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash
                        newUser.save()
                            .then(user => res.status(200).json({reg: 'New user has been registered.'}))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
    })

router.post('/login', (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body)
    if (!isValid)
        return res.status(400).json(errors)

    const username = req.body.username
    const password = req.body.password


    User.findOne({
        username
    }).then(user => {
        if (!user)
            return res.status(404).json({
                usernamenotfound: "Username not found"
            })


        bcrypt.compare(password, user.password, function (err, response) {
            if (response) {
                const payload = {
                    id: user.id,
                    username: user.username
                }

                jwt.sign(
                    payload,
                    process.env.SECRET_KEY, {
                        expiresIn: 86400 // 1 day in seconds
                    },
                    (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: "Bearer " + token,
                            name: user.name
                        })
                    }
                )
            } else if (err) {
                return res
                    .status(400)
                    .json({
                        passwordincorrect: "Password incorrect."
                    })
            }
        })

    })
})

router.post('/forgot_password', (req, res) => {
    const { username } = req.body
    User.findOne({
        username
    }).then(user => {
        if (!user)
            return res.status(404).json({
                usernamenotfound: "Username not found"
            })

            else{
                
            }
        })

})


router.get('/auth',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const {
            user
        } = req;

        res.status(200).json({
            user
        });
    });

module.exports = router;