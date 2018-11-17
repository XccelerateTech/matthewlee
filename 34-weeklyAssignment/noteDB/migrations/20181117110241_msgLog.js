
exports.up = function(knex, Promise) {
  return knex.schema.createTable("msg", (table)=>{
      table.increments();
      table.string("msg");

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("msg")
};
