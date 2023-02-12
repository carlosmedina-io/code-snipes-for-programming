const Factory = require('./factory');

const namekPlanet = Factory.createPlanet({
    name: 'Namek',
    race: 'Namekians',
    location: 'Universe 7',
});
const atomicBlast = Factory.createTechnic({
    name: 'Atomic Blast',
    damageLevel: 5000,
});

console.log(namekPlanet);
console.log(atomicBlast);
