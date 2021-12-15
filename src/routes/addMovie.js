const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")

Router.post("/addMovie", async (req, res) => {
    if (!req.body.is_auth) return res.status(401).send({ auth: false, message: "user has to register first" });
    const data = await poolConnection.execute('insert into movie_master(added_by,movie_name,genre,released_date,up_votes,down_votes,review) values(?,?,?,?,?,?,?)',
        [req.body.added_by, req.body.movieName, req.body.genre, req.body.release_date, req.body.up_votes,
        req.body.down_votes, req.body.review])

    res.status(200).send({ status : 200, customer_id: data[0].id, message: `movie has been added succesfully` });

})

module.exports = Router