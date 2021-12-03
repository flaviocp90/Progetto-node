const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localgost:8081'
}


//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers

const router = require('./routes/productRouter')
app.use('/api/products', router)


//testing app
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})