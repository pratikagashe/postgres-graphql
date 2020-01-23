require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { postgraphile } = require('postgraphile')

const { PORT, DATABASE, USER, PASSWORD, HOST, PG_PORT } = process.env

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
    postgraphile(
        {
            database: DATABASE,
            user: 'postgres',
            password: PASSWORD,
            host: HOST,
            port: PG_PORT,
        },
        'public',
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
        }
    )
)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
