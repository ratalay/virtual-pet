function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}
Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}


 
 
 
 
 
 
 /*if (hungerLevel <= 4) {
    alert("I'm hungry :(")
} */



module.exports = Pet;