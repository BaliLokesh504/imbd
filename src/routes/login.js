const bcrypt = require("bcrypt")
const express = require('express')
const Router = express.Router()
const { connection, poolConnection } = require("../db/mysqlConfig")


Router.post("/login", async (req, res) => {
    const [data] = await poolConnection.execute('select id, password,customer_name from customer_master where email_id=?',
        [req.body.email_id])
    var passwordIsValid = bcrypt.compareSync(req.body.password, data[0].password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, message: "invalid credintials" });
    res.status(200).send({ auth: true,customer_id : data[0].id, message: `Hi ${data[0].customer_name} login succesfull` });
})


module.exports = Router