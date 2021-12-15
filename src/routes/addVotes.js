const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")

Router.post("/addVotes", async (req, res) => {
    if (!req.body.is_auth) return res.status(401).send({ auth: false, message: "user has to register first" });
    const data = await poolConnection.execute('insert into movie_add_rating(added_by,movie_id,up_votes,down_votes) values(?,?,?,?)',
        [req.body.added_by, req.body.movie_id, req.body.up_votes,
        req.body.down_votes])
    res.status(200).send({ status :200, 
         message: `votes has been added succesfully` });

})

module.exports = Router