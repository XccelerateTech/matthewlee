
exports.up = function(knex, Promise) {
  return knex.schema.table("msg", (table)=>{
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("msg", (table)=>{
      table.dropForeign("users_id");
      table.dropColumn("user_id")
  })
};
