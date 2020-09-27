const express = require('express');
const router = express.Router();
const Admin = require('../models/adminSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../config/keys')


router.get('/', async (req, res) => {
    try {
        const admin = await Admin.find()
        res.status(200).json({
            success: true,
            msg: "admin fetched",
            admin
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "admin cannot be fetched",

        })

    }
})

router.post('/register', (req, res) => {
    let { name, password } = req.body;
    if (!name || name.length < 0) {
        res.status(400).json({ msg: "Admin Name cannot be empty!" })
    } else if (!password || password.length < 0) {
        res.status(400).json({ msg: "Admin Password cannot be empty!" })
    }

    Admin.findOne({ name })
        .then(admin => {
            if (admin) {
                return res.status(400).json({
                    msg: "Name is already registered. Did you forgot your password."
                });
            }
        });
    let newAdmin = new Admin({
        name, password
    })
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
            newAdmin.save().then(admin => {
                return res.status(201).json({

                    success: true,
                    msg: "Admin has been registered Successfully!"
                });
            });
        });
    });
})

router.post('/login', (req, res) => {
    let { name, password } = req.body;
    Admin.findOne({ name })
        .then(admin => {
            if (!admin) {
                return res.status(404).json({
                    admin: admin,
                    msg: "Username is not found.",
                    success: false
                });
            }
            // If there is user we are now going to compare the password
            bcrypt.compare(password, admin.password).then(isMatch => {
                if (isMatch) {
                    // User's password is correct and we need to send the JSON Token for that user
                    const payload = {
                        _id: admin._id,
                        name: admin.name,

                    }
                    jwt.sign(payload, key, {
                        expiresIn: 604800
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: `Bearer ${token}`,
                            admin: admin,
                            msg: "You are now logged in!"
                        });
                    })
                } else {
                    return res.status(404).json({
                        msg: "Incorrect password.",
                        success: false
                    });
                }
            })
        });
});

router.put('/update', (req, res) => {
    const { _id, currentPassword, password, name } = req.body
    Admin.findById(_id, (err, adminData) => {
        bcrypt.compare(currentPassword, adminData.password).then(isMatch => {
            if (isMatch) {
                if (password) {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            hasedPassword = hash;
                            let condition = { _id };
                            let dataForUpdate = { name, password: hasedPassword, updatedDate: new Date() };
                            Admin.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (err, updatedAdmin) {
                                if (err) {
                                    if (err.name === 'MongoError' && err.code === 11000) {
                                        res.status(409).send(new MyError('Mongo Db Error ', [err.message]));
                                    }

                                    res.status(500).send(new MyError('Unknown Server Error', ['Unknown server error when updating User']));
                                }
                                if (!updatedAdmin) {
                                    return res.status(404).json({
                                        msg: "User Not Found.",
                                        success: false
                                    });
                                }
                                return res.status(200).json({
                                    success: true,
                                    msg: "Admin Successfully Updated",
                                    updatedData: updatedAdmin
                                });
                            });
                        });
                    });
                }
                else {
                    let condition = { _id };
                    let dataForUpdate = { name, updatedDate: new Date() };
                    Admin.findOneAndUpdate(condition, dataForUpdate, { new: true }, (err, updatedAdmin) => {
                        if (err) {
                            if (err.name === 'MongoError' && err.code === 11000) {
                                return res.status(409).send(new MyError('Mongo Db Error ', [err.message]));
                            }

                            return res.status(500).send(new MyError('Unknown Server Error', ['Unknown server error when updating User']));
                        }
                        if (!updatedAdmin) {
                            return res.status(404).json({
                                msg: "User Not Found.",
                                success: false
                            });
                        }
                        return res.status(200).json({
                            success: true,
                            msg: "User Successfully Updated",
                            updatedData: updatedAdmin
                        });
                    });
                }
            } else {
                return res.status(401).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
})

router.delete('/delete/:id', (req, res) => {
    Admin.findByIdAndDelete(req.params.id, req.body, (err, admin) => {
        if (!err) {
            res.status(200).json({
                success: true,
                msg: "Admin was succesfully deleted",
                admin: admin
            })
        } else {
            res.status(400).json({
                success: false,
                msg: "There was an error deleting admin",
                admin: admin
            })
        }
    })
})


router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "admin fetched",
            admin
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "admin cannot be fetched",

        })

    }
})



module.exports = router