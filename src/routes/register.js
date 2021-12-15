const bcrypt = require("bcrypt")
const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")

Router.post("/regster", async (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const data = await poolConnection.execute('insert into customer_master(customer_name,email_id,password) values(?,?,?)',
        [req.body.customer_name, req.body.email_id, hashedPassword])
    res.send({
        status: 200,
        message: "user registerd succesfully"
    })
})




module.exports = Router