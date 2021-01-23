function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}
Pet.prototype.growUp = function (agingBy = 1) {
    this.age = this.age + agingBy
}


 
 
 
 
 
 
 /*if (hungerLevel <= 4) {
    alert("I'm need food :(")
} */



module.exports = Pet;