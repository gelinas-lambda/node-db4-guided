exports.seed = function(knex) {
  return knex('animal_zoos').insert([
    { zoo_id: 1, animal_id: 1, from: '2017-12-01' },
    { zoo_id: 1, animal_id: 2, from: '2017-12-01' },
    { zoo_id: 2, animal_id: 3, from: '2017-12-01', to: '2019-01-26' },
    { zoo_id: 2, animal_id: 4, from: '2017-12-01', to: '2019-01-26' },
    { zoo_id: 2, animal_id: 5, from: '2017-12-01' },
    { zoo_id: 3, animal_id: 6, from: '2017-12-01' },
    { zoo_id: 3, animal_id: 3, from: '2019-01-26' },
    { zoo_id: 3, animal_id: 4, from: '2019-01-26' },
  ]);
};
