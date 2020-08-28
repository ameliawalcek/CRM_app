const express = require('express')
const router = express.Router()
const mysql = require('mysql')
// const async = require('async')

const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sql_crm',
    multipleStatements: true
})

sqlConnection.connect((err) => {
    if (!err)
        console.log('DB connected')
    else
        console.log('DB connection failed' + JSON.stringify(err, undefined, 2))
})

router.get('/clients', (req, res) => {
    sqlConnection.query(`
        SELECT c.id, c.last, c.first, c.email, c.date, c.sold, 
            country.country, owner.owner, email_type.email_type
        FROM client AS c
            INNER JOIN country ON c.country_id = country.id
            INNER JOIN owner ON c.owner_id = owner.id
            LEFT OUTER JOIN email_type ON c.email_type_id = email_type.id
        ORDER BY c.last`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        }
    )
})

router.get('/clients/owners', (req, res) => {
    sqlConnection.query(`SELECT * FROM owner`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        })
})

router.get('/clients/emailTypes', (req, res) => {
    sqlConnection.query(`SELECT * FROM email_type ORDER BY email_type`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        })
})

router.get('/clients/countries', (req, res) => {
    sqlConnection.query(`SELECT * FROM country`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        })
})

router.get('/clients/sums', (req, res) => {
    sqlConnection.query(
        `SELECT country, COUNT(*) AS count FROM country  
            INNER JOIN client ON country.id = client.country_id 
            GROUP BY country; 
        SELECT owner, COUNT(*) AS count FROM owner 
            INNER JOIN client ON owner.id = client.owner_id
            GROUP BY owner`,
        function (error, results, fields) {
            if (error) throw error
            res.send(results)
        })
})

router.get('/client/:id', (req, res) => {
    const { id } = req.params

    sqlConnection.query(`        
        SELECT c.id, c.last, c.first, c.email, c.date, c.sold, 
            country.country, owner.owner, email_type.email_type
        FROM client AS c
            INNER JOIN country ON c.country_id = country.id
            INNER JOIN owner ON c.owner_id = owner.id
            LEFT OUTER JOIN email_type ON c.email_type_id = email_type.id 
        WHERE c.id = ${id}`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        })
})

router.post('/client', (req, res) => {
    console.log(req.body)
    const { last, first, email, sold, date, email_type_id, owner_id, country_id } = req.body

    sqlConnection.query(`INSERT INTO client 
    VALUES(null, '${last}', '${first}', '${email}', 
    ${sold}, '${date}', ${email_type_id}, ${owner_id}, ${country_id}) `,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        })
})

router.delete('/client/:id', (req, res) => {
    const { id } = req.params
    sqlConnection.query(`DELETE FROM client WHERE client.id = ${id}`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        })
})

module.exports = router