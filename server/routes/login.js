const express = require('express');
const router = express.Router();
const Login = require("../models/loginSchema");

router.post('/', async (req, res) => {
    try {
        const {   /* familyName, givenName, */googleId, imageUrl,email,name} = req.body;
        const login = new Login({
            googleId, imageUrl, email, name,/*  familyName, givenName */
        })
        if(await Login.findOne({googleId})){
            res.status(200).json({
                success: true,
                msg: "user sucessfully logged in",
                login
            })
        }
        else{
        await login.save();
        res.status(200).json({
            success: true,
            msg: "user sucessfully logged in",
            login
        })}
    } catch (e) {
        res.status(401).json({
            success: false,
            msg: "unable to login ",

        })

    }
})

router.get('/', async (req, res) => {
    try {
        const login = await Login.find()
        res.status(200).json({
            success: true,
            msg: "login data fetched",
            login
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "login data cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { googleId, imageUrl, email, name, /* familyName, givenName */ } = req.body;
        let datatobeupdated = { googleId, imageUrl, email, name /* , familyName, givenName */, updatedDate: new Date() }
        const login = await Login.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "login data is updated succesfully",
            login
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the login data",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let login
    try {
        login = await Login.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success: true,
            msg: "login data is deleted succesfully",
            login
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete login data",

        })
        console.log("err", e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const login = await Login.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "login data fetched",
            login
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "login data cannot be fetched",

        })

    }
})



module.exports = router