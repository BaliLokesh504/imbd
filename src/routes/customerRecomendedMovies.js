const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")


Router.post("/customerRecomendedMovies", async (req, res) => {
    if (!req.body.is_auth) return res.status(401).send({ auth: false, message: "user has to register first" });
    const [data] = await poolConnection.execute('select m.movie_name,m.released_date,m.up_votes,m.down_votes,m.genre from movie_master m inner join customer_favourite_genre f on m.genre=f.genre_name where m.added_by=?',
        [req.body.added_by])

    if (data[0] === undefined) return res.status(200).send({
        staus: 200,
        moviesList: "No recomended movies for you"
    });
    res.status(200).send({
        staus: 200,
        moviesList: data[0]
    });

})


module.exports = Router