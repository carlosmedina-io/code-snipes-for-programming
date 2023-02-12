class Warrior {
    name(name) {
        this.name = name;
        return this;
    }

    race(race) {
        this.race = race;
        return this;
    }

    gender(gender) {
        this.gender = gender;
        return this;
    }

    ocupation(ocupation) {
        this.ocupation = ocupation;
        return this;
    }

    transformation(transformation) {
        this.transformation = transformation;
        return this;
    }

    static builder() {
        return new Warrior();
    }
}

module.exports = Warrior;