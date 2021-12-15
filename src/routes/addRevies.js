const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")

Router.post("/addReview", async (req, res) => {
    if (!req.body.is_auth) return res.status(401).send({ auth: false, message: "user has to register first" });
    const data = await poolConnection.execute('insert into movie_add_review(added_by,movie_id,review) values(?,?,?)',
        [req.body.added_by, req.body.movie_id, req.body.review])
    res.status(200).send({ status :200, 
         message: `revies has been added succesfully` });

})

module.exports = Router