const router = require("express").Router();
const User = require("../models/User");


//get users gender
router.get("/gender", async (req, res) => {
    try {
        await User.aggregate([
            {
                $group: {
                    _id: "$gender",
                    value: {$sum: 1},
                }
            }
        ]).exec((err, result) => {
            if (err) {
                return console.log(err)
            } else {
                res.status(200).json({ result })
            }

        });

    } catch (err) {
        res.status(500).json(err)
    }
});

//get users country
router.get("/country", async (req, res) => {
    try {
        await User.aggregate([
            {
                $group: {
                    _id: "$country",
                    value: {$sum: 1}
                }
            },

        ]).exec((err, result) => {
            if (err) {
                return console.log(err)
            } else {
                res.status(200).json({ result })
            }

        });

    } catch (err) {
        res.status(500).json(err)
    }
});


//get top 15 users
router.get("/top-users", async (req, res) => {
    try {
        await User.aggregate([
            {
                $limit: 15
            },
            {
                $sort: { logTime: -1 }
            }
        ]).exec((err, result) => {
            if (err) {
                return console.log(err)
            } else {
                res.status(200).json({ result })
            }

        });

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;