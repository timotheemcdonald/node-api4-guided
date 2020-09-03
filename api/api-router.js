const express = require("express");
const Shouts = require("./shouts-model.js");
const router = express.Router();
router.get("/", (req, res, next) => {
    Shouts.find()
        .then(shouts => {
            res.status(200).json(shouts);
        })
        .catch(error => next(error));
});
router.post("/", (req, res, next) => {
    Shouts.add(req.body)
        .then(shout => {
            res.status(201).json(shout);
        })
        .catch(error => next(error));
});
router.delete("/:id", (req, res) => {
    Shouts.remove(req.params.id)
        .then(count => {
            if (count) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => next(error));
});
module.exports = router;