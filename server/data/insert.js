const Sequelize = require('sequelize')
const data = require('./data')
const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')

let country = data.map(d => d.country)
country = country.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
})

let owner = data.map(d => d.owner)
owner = owner.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
})

let emailType = data.map(d => d.emailType)
emailType = emailType.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
})

const addValue = async function (table, type) {
    let query =`INSERT INTO ${table} VALUES (null, '${type}')`
    let result = await sequelize.query(query)
    return result[0]
}

const findByID = async (table, value) => {
    let query = `SELECT id FROM ${table} WHERE name = "${value}"`
    let results = await sequelize.query(query)

    return results[0][0].id
}

const addClient = async (client) => {
    let emailType = client.emailType !== null ? await findByID('email_type', client.emailType) : null
    let owner = await findByID('owner', client.owner)
    let country = await findByID('country', client.country)

    let date = new Date (client.firstContact).toLocaleDateString()

    let query =`INSERT INTO client
    VALUES (null, '${client.name}', '${client.email}', ${client.sold}, '${date}', ${emailType}, ${owner}, ${country})`
    let result = await sequelize.query(query)
    return result[0]
}

// emailType.forEach(t =>{
//     addValue('email_type', t)
// })

// country.forEach(t =>{
//     addValue('country', t)
// })

// owner.forEach(t =>{
//     addValue('owner', t)
// })

// data.forEach(d => {
//     addClient(d)
// })