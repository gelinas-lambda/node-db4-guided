exports.seed = function(knex) {
  return knex('zoos').insert([
    { name: 'bronx zoo', address: 'in the Bronx' }, // 1
    { name: 'Lincoln Park Zoo', address: 'somewhere' }, // 2
    { name: 'Central Park Zoo', address: 'New York' }, // 3
  ]);
};
