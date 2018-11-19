
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'fk', password: "off"},
        {id: 2, username: 'gd', password: "boy"},
        {id: 3, username: 'bad', password: "gal"},
      ]);
    }) 
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('msg').del()
    .then(function () {
      // Inserts seed entries
      return knex('msg').insert([
        {id: 1, msg: "fk", user_id:1},
        {id: 2, msg: "off", user_id:1},
        {id: 3, msg: "gd", user_id:2},
        {id: 4, msg: "boy", user_id:2},
        {id: 5, msg: "bad", user_id:3},
        {id: 6, msg: "gal", user_id:3},
      ]);
    });
};

