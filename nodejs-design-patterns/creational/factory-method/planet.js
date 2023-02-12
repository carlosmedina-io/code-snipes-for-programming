class Planet {
    constructor({ name, race, location }) {
        this.name = name;
        this.race = race;
        this.location = location;
    }

    name(name) {
        this.name = name;
    }

    race(race) {
        this.race = race;
    }

    location(location) {
        this.location = location;
    }
}

module.exports = Planet;
