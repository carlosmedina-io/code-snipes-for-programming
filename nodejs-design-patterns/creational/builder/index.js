const Warrior = require('./Warrior');

const vegeta = Warrior.builder()
    .withName("Vegeta")
    .withRace("Saiyan")
    .withGender("Male")
    .withOcupation("Prince of planet Vegeta")
    .withTransformation("Ultra Ego");

console.log(vegeta);
