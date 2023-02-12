const Warrior = require('./Warrior');

const vegeta = Warrior.builder()
    .name("Vegeta")
    .race("Saiyan")
    .gender("Male")
    .ocupation("Prince of planet Vegeta")
    .transformation("Ultra Ego");

console.log(vegeta);
