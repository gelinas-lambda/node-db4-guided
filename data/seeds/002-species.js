exports.seed = function(knex) {
  return knex('species').insert([
    { name: 'horse' }, // 1
    { name: 'bear' }, // 2
    { name: 'panda bear' }, // 3
  ]);
};
