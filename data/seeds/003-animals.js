exports.seed = function(knex) {
  return knex('animals').insert([
    { name: 'max', species_id: 1 }, // 1
    { name: 'mr. Ed', species_id: 1 }, // 2
    { name: 'yogi', species_id: 2 }, // 3
    { name: 'booboo', species_id: 2 }, // 4
    { name: 'po', species_id: 3 }, // 5
    { name: 'bao bao', species_id: 3 }, // 6
  ]);
};
