const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")

Router.post("/favoriteGenre",async(req,res)=>{
    if (!req.body.is_auth) return res.status(401).send({ auth: false, message: "user has to register first" });
    const data = await poolConnection.execute('insert into customer_favourite_genre(added_by,genre_name,is_favourite) values(?,?,?)',
        [req.body.added_by, req.body.genre_name, req.body.is_favourite])

    res.status(200).send({ auth: true, customer_id: data[0].id, message: `movie has been added to favourite` });

})

module.exports = Router