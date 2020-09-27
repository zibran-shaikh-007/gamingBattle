const express = require('express');
const router = express.Router();
const Form = require("../models/tourformSchema");
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const imageMimeType = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
const upload = multer({
    // desc: uploadpath,
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        cb(null, imageMimeType.includes(file.mimetype))
    }

});

router.post("/", upload.single(
    'youtube'), async (req, res) => {
        const { youtube, name, age, mobile, email, address, playerId1, playerName1, playerId2, playerName2, playerId3,
            playerName3, playerId4, playerName4, playerId5, playerName5, playerId6, playerName6, selectedDate, selectedTime } = req.body
        try {
            let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
                console.log("res", err, res)

            })
            const form = new Form({
                youtube: result.secure_url,
                name, age, mobile, email, address, playerId1, playerName1, playerId2, playerName2, playerId3,
                playerName3, playerId4, playerName4, playerId5, playerName5, playerId6, playerName6, selectedDate,selectedTime
            });
            await form.save();
            res.status(200).json({
                success: true,
                msg: "Registration Done successfully",
                form

            })

        }
        catch (e) {
            console.log('error', e)
            res.status(401).json({
                success: false,
                msg: "unable to create registration form",

            })
        }
    })

router.get('/', async (req, res) => {
    try {
        const form = await form.find()
        res.status(200).json({
            success: true,
            msg: "form fetched",
            form
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "form cannot be fetched",

        })

    }
})

router.put('/:id', upload.single(
    'youtube'), async (req, res) => {
        try {
            const { youtube,name, age, mobile, email, address, playerId1, playerName1, playerId2, playerName2, playerId3,
                playerName3, playerId4, playerName4, playerId5, playerName5, playerId6, playerName6, selectedDate, selectedTime} = req.body;
            let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
                console.log("res", err, res)

            })
            let datatobeupdated = { youtube: result.secure_url, name, age, mobile, email, address, playerId1, playerName1, playerId2, playerName2, playerId3,
                playerName3, playerId4, playerName4, playerId5, playerName5, playerId6, playerName6,selectedDate, selectedTime, updatedDate: new Date() }
            const form = await Form.findByIdAndUpdate(req.params.id, datatobeupdated)
            res.status(200).json({
                success: true,
                msg: "form is updated succesfully",
                form
            })
        } catch (e) {
            res.status(400).json({
                success: false,
                msg: "Unable to update the form",

            })
            console.log("err", e)
        }
    })

router.delete('/:id', async (req, res) => {
    let form
    try {
        form = await form.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success: true,
            msg: "form is deleted succesfully",
            form
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete form",

        })
        console.log("err", e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "form fetched",
            form
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "form cannot be fetched",

        })

    }
})


module.exports = router