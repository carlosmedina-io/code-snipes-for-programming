class Technic {
    constructor({ name, damageLevel }) {
        this.name = name;
        this.damageLevel = damageLevel;
    }

    name(name) {
        this.name = name;
    }

    damageLevel(damageLevel) {
        this.damageLevel = damageLevel;
    }
}

module.exports = Technic;
