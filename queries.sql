select * from zoos;

select * from animals;

select a.id, a.name, s.name as species 
from animals as a
join species as s
    on a.species_id = s.id;
    
-- history of an animal
select a.id, a.name as Animal, s.name as Species, z.name as Zoo, az.[From], az.[To]
from animals as a
join species as s 
    on a.species_id = s.id
join animal_zoos as az
    on a.id = az.animal_id
join zoos as z
    on z.id = az.zoo_id
where a.id = 3
order by az.[from];

