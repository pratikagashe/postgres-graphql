const { postgraphile } = require('postgraphile')

const { DATABASE, PASSWORD, HOST, PG_PORT } = process.env

module.exports = postgraphile(
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
