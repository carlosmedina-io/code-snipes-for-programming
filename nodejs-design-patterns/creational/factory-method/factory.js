const Planet = require('./planet');
const Technic = require('./technic');

class Factory {
    createPlanet({ name, race, location }) {
        return new Planet({
            name,
            race,
            location,
        });
    }

    createTechnic({ name, damageLevel }) {
        return new Technic({
            name,
            damageLevel,
        });
    }
}

module.exports = new Factory();
