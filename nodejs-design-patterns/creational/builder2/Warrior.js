class Warrior {
    constructor(warriorBuilder) {
        this.name = warriorBuilder.name;
        this.race = warriorBuilder.race;
        this.gender = warriorBuilder.gender;
        this.ocupation = warriorBuilder.ocupation;
        this.transformation = warriorBuilder.transformation;
    }
    
    static builder() {
        return new Warrior.WarriorBuilder();
    }

    static WarriorBuilder = class {
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
        build() {
            return new Warrior(this);
        }
    }
}

module.exports = Warrior;
