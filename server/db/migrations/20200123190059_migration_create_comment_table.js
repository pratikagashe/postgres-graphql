exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments().primary()
        table.string('comment', 255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table
            .integer('user_id')
            .references('id')
            .inTable('users')
        table.string('user_name', 255).notNullable()
        table
            .integer('post_id')
            .references('id')
            .inTable('posts')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
}
