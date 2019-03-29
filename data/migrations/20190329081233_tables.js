
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('project', (db) => {
        db.increments();
    
        db.string('name', 128).notNullable();
        db.text('description').notNullable();
        db.boolean('completed').defaultTo(false);
      })
      .createTable('action', (db) => {
        db.increments();
    
        db
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project');
    
        db.string('description', 128).notNullable();
        db.text('notes').notNullable();
        db.boolean('completed').defaultTo(false);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('action');

};
