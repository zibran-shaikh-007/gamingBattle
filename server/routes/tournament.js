const express = require('express');
const router = express.Router();
const Tournaments = require("../models/tournamentSchema");
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

router.post("/", /* upload.single(
    'image'), */ async (req, res) => {
        const { image, games, prizepool, totalPrize, totalParticipant, startDate, endDate, startTime, endTime, team, rules, platform } = req.body
        try {
            /*  let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
                 console.log("res", err, res)
 
             })
              const tournaments = new Tournaments({
                  image: result.secure_url,
                  games,
                  prizepool, totalPrize, totalParticipant, startDate, endDate, startTime, endTime, team, rules, platform
              }); */
            const tournaments = new Tournaments({
                image: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600785909/not_available_2_c9b0l6.jpg',
                games: 'PUbg',
                prizepool: [{ rank: 1, prize: 50000 }, { rank: 2, prize: 20000 }, { rank: 3, prize: 10000 }, { rank: "5-10", prize: 500 }],
                totalPrize: 150000,
                totalParticipant: 6000,
                startDate: 'Sun Sep 20 2020 00:00:00 GMT+0530 (India Standard Time)',
                endDate: 'Fri Nov 20 2020 00:00:00 GMT+0530 (India Standard Time)',
                startTime: 'Sun Sep 20 2020 10:00:00 GMT+0530 (India Standard Time)',
                endTime: 'Sun Sep 20 2020 22:00:00 GMT+0530 (India Standard Time)',
                team: 'Squad',
                rules: "1. Decision taken by the Admin Team will be final and binding and won't be changed or reverted under any circumstances 2. Admin Team has right to ban/kick any player without prior notice",
                platform: 'Mobile'
            });
            await tournaments.save();
            res.status(200).json({
                success: true,
                msg: "tournament",
                tournaments

            })
            console.log('tournaments', tournaments)
        }
        catch (e) {
            console.log('error', e)
            res.status(401).json({
                success: false,
                msg: "unable to create tournament",

            })
        }
    })

router.get('/', async (req, res) => {
    try {
        const tournaments = await Tournaments.find()
        const startDate = tournaments.map(tour => {
            return (
                tour.startDate
            )
        })
        const matchesToBePlayed = tournaments.map(tour => { return (tour.totalParticipant / 20) })

        console.log("matches", matchesToBePlayed)
        console.log("startDate", startDate)

        res.status(200).json({
            success: true,
            msg: "tournaments fetched",
            tournaments
        })

    } catch {
        res.status(400).json({
            success: false,
            msg: "tournaments cannot be fetched",

        })

    }
})

router.put('/:id', upload.single(
    'image'), async (req, res) => {
        try {
            const { image, games, prizepool, totalPrize, totalParticipant, startDate, endDate, startTime, endTime, team, rules, platform } = req.body;
            let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
                console.log("res", err, res)
            })
            let datatobeupdated = { image: result.secure_url, games, prizepool, totalPrize, totalParticipant, startDate, endDate, startTime, endTime, team, rules, platform, updatedDate: new Date() }
            const tournaments = await Tournaments.findByIdAndUpdate(req.params.id, datatobeupdated)
            res.status(200).json({
                success: true,
                msg: "Tournaments is updated succesfully",
                tournaments
            })
        } catch (e) {
            res.status(400).json({
                success: false,
                msg: "Unable to update the tournaments",

            })
            console.log("err", e)
        }
    })

router.delete('/:id', async (req, res) => {
    let tournaments
    try {
        tournaments = await Tournaments.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success: true,
            msg: "tournaments is deleted succesfully",
            tournaments
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete tournaments",

        })
        console.log("err", e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const tournaments = await Tournaments.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "tournaments fetched",
            tournaments
        })

    } catch {
        res.status(400).json({
            success: false,
            msg: "tournament cannot be fetched",

        })

    }
})


module.exports = router