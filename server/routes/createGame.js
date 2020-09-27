const express = require('express');
const router = express.Router();
const CreateGame = require('../models/createGame');
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

router.post('/', upload.single(
     'image' ), async (req, res) => {
    try {
        const { name, image } = req.body;
        let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
            console.log("res", err, res)

        })
        console.log("result", result)
        const createGame = new CreateGame({
            name,
            image: result.secure_url
        });
        await createGame.save();
        res.status(200).json({
            success: true,
            msg: "createGame created",
            createGame 
        })

    } catch{
        res.status(401).json({
            success: false,
            msg: "unable to create Game ",

        })
    }
})
router.get('/', async (req, res) => {
    try {
        const createGame  = await CreateGame.find()
        res.status(200).json({
            success: true,
            msg: "createGame fetched",
            createGame 
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "Game cannot be fetched",

        })

    }
})

router.put('/:id', upload.single(
    'image' ),async (req, res) => {
    try {
        const {name, image } = req.body
        let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
            console.log("res", err, res)

        })
        let datatobeupdated = { name, image: result.secure_url, updatedDate: new Date() }
        const createGame = await CreateGame.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "createGame is updated succesfully",
            createGame
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the createGame",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let createGame
    try {
        createGame = await CreateGame.findByIdAndRemove(req.params.id)
         res.status(200).json({
            success: true,
            msg: "createGame is deleted succesfully",
             createGame
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete createGame",

        })
        console.log("err", e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const createGame  = await CreateGame.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "createGame fetched",
            createGame 
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "Game cannot be fetched",

        })

    }
})


module.exports = router