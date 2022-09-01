const express = require('express')
const ObjectId = require('mongodb').ObjectId;


const createRouter = function (collection) {

    const router = express.Router();


    router.get("/", (req, res) => {
        collection.find().toArray().then((docs) => { res.json(docs) })
            .catch((err) => {
                console.log(err)
                res.status(500);
                res.json({ status: 500, error: err })
            });
    });

    router.post("/", (req, res) => {
        const bookingToAdd = req.body;
        collection.insertOne(bookingToAdd).then((result) => res.json(result.ops[0]))
            .catch((err) => {
                console.log(err);
                res.status(500);
                res.json({ status: 500, error: err })
            });

    });
    router.delete("/:id", (req, res) => {
        const id = ObjectId(req.params.id)
        collection.deleteOne({ _id: id }).then((result) => res.json(result))
            .catch((err) => {
                console.log(err);
                res.status(500);
                res.json({ status: 500, error: err })
            });
    })

    router.get("/:id", (req, res) => {
        const id = ObjectId(req.params.id)
        collection.findOne({ _id: id }).then((result) => res.json(result))
            .catch((err) => {
                console.log(err);
                res.status(500);
                res.json({ status: 500, error: err })
            });

    })

    router.put("/:id", (req, res) => {
        const updateData = req.body
        const id = ObjectId(req.params.id)

        collection.updateOne({ _id: id }, { $set: updateData })
        
        .then((result) => res.json(result))
            .catch((err) => {
                console.log(err);
                res.status(500);
                res.json({ status: 500, error: err })
            });


    })



    return router;
};

module.exports = createRouter;