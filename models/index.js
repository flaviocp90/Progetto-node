const dbConfing = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequalize = new Sequelize(
    dbConfing.DB,
    dbConfing.USER,
    dbConfing.PASSWORD, {
        host: dbConfing.HOST,
        dialect: dbConfing.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfing.pool.max,
            min: dbConfing.pool.min,
            acquire: dbConfing.pool.acquaire,
            idle: dbConfing.pool.idle

        }
    }
)

sequalize.authenticate()
.then(() => {
    console.log('connected')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}