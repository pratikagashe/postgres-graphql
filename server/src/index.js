require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const postgraphile = require('./postgraphile')
const cors = require('cors')

const { PORT } = process.env

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphile)
app.use(cors)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
