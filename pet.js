const maxFitness = 10;
const minHunger = 0;
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

Pet.prototype.walk = function () {
   if (this.fitness <= 5){
       this.fitness += 4
   } else {this.fitness = maxFitness}
}

Pet.prototype.feed = function () {
    if (this.hunger <= 3) {
        this.hunger = minHunger
    } else {
        this.hunger -= 3;
    }
}

Pet.prototype.checkUp = function () {
if (this.hunger >= 5 && this.fitness <= 3) {
    return 'I am hungry AND I need a walk'
} else if (this.hunger < 5 && this.fitness > 3){
    return 'I feel great!'
} else if (this.hunger >= 5) {
    return 'I am hungry'
} else {
    return 'I need a walk'
}
}


 
 
 
 
 
 
 /*if (hungerLevel <= 4) {
    alert("I'm hungry :(")
} */



module.exports = Pet;