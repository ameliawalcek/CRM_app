const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const async = require('async')

const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sql_crm'
})

sqlConnection.connect((err) => {
    if (!err)
        console.log('DB connected')
    else
        console.log('DB connection failed' + JSON.stringify(err, undefined, 2))
})

router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/clients', (req, res) => {
    sqlConnection.query(`
        SELECT c.name, c.email, c.date, c.sold, 
            country.country, owner.owner, email_type.email_type
        FROM client AS c
            INNER JOIN country ON c.country_id = country.id
            INNER JOIN owner ON c.owner_id = owner.id
            LEFT OUTER JOIN email_type ON c.email_type_id = email_type.id`,
        function (err, data) {
            if (err) console.log(err)
            res.send(data)
        }
    )
})

router.get('/clients/sums', (req, res) => {
    const data = {}
    const queryOne = `SELECT country, COUNT(*) AS count FROM country  
                    INNER JOIN client ON country.id = client.country_id 
                    GROUP BY country`
    const queryTwo = `SELECT owner, COUNT(*) AS count FROM owner 
                    INNER JOIN client ON owner.id = client.owner_id
                    GROUP BY owner`

    async.parallel([
        function (parallel_done) {
            sqlConnection.query(queryOne, {}, function (err, results) {
                if (err) return parallel_done(err)
                data.country = results
                parallel_done()
            })
        },
        function (parallel_done) {
            sqlConnection.query(queryTwo, {}, function (err, results) {
                if (err) return parallel_done(err)
                data.owner = results
                parallel_done()
            })
        }
    ], function (err) {
        if (err) console.log(err)
        res.send(data)
    })
})

module.exports = router