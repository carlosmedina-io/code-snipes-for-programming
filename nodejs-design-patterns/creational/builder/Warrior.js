class Warrior {
    withName(name) {
        this.name = name;
        return this;
    }

    withRace(race) {
        this.race = race;
        return this;
    }

    withGender(gender) {
        this.gender = gender;
        return this;
    }

    withOcupation(ocupation) {
        this.ocupation = ocupation;
        return this;
    }

    withTransformation(transformation) {
        this.transformation = transformation;
        return this;
    }

    static builder() {
        return new Warrior();
    }
}

module.exports = Warrior;