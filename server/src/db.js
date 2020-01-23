const postgresMigrations = require('postgres-migrations')
const createDb = postgresMigrations.createDb()
const migrate = postgresMigrations.migrate()

const { DATABASE, USER, PASSWORD, HOST, PG_PORT } = process.env

async function migration() {
    const dbConfig = {
        database: 'postgres-graphql',
        user: 'postgres',
        password: 'root',
        host: 'localhost',
        port: 5432,
    }

    await createDb(database, {
        ...dbConfig,
        defaultDatabase: 'postgres',
    })

    await migrate(dbConfig, './migrations/files')
}

migration()
