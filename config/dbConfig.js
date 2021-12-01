module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: '',  //specificare il nome del db
    dialect: 'mysql',

    pool: {
        max: 5, 
        min: 0,
        acquaire: 30000,
        idle: 10000
    }
}