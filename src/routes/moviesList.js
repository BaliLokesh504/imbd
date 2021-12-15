const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")


Router.post("/moviesList", async (req, res) => {
    if (!req.body.is_auth) return res.status(401).send({ auth: false, message: "user has to register first" });
    const [data] = await poolConnection.execute('select m.movie_name,m.released_date,avg(r.up_votes) up_votes,avg(r.down_votes) down_votes,group_concat(mr.review) review from movie_master m left join movie_add_rating r on m.added_by=r.added_by left join movie_add_review mr on m.added_by=mr.added_by and m.movie_id=r.movie_id and m.movie_id=mr.movie_id where m.added_by=? group by m.movie_id;',
        [req.body.added_by])

    if (data[0] === undefined) return res.status(200).send({
        staus: 200,
        moviesList: "No Movies to display"
    });
    res.status(200).send({
        staus: 200,
        moviesList: data[0]
    });

})


module.exports = Router