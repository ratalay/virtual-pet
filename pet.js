const maxFitness = 10;
const minHunger = 0;
const hungerThreshold = 5;
const tirednessThreshold =3;
function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}
Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.fitness > 0 && this.hunger < 10;
    }
}

Pet.prototype.growUp = function () {
    if(!this.isAlive) {
        throw new Error (`${this.name} is no longer alive :(`)
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if(!this.isAlive) {
        throw new Error (`${this.name} is no longer alive :(`)
    }
   if (this.fitness <= 5){
       this.fitness += 4
   } else {this.fitness = maxFitness}
}

Pet.prototype.feed = function () {
    if(!this.isAlive) {
        throw new Error (`${this.name} is no longer alive :(`)
    }
    if (this.hunger <= 3) {
        this.hunger = minHunger
    } else {
        this.hunger -= 3;
    }
}

Pet.prototype.checkUp = function () {
    if(!this.isAlive) {
        throw new Error ('Your pet is no longer alive :(')
    }
if (this.hunger >= hungerThreshold && this.fitness <= tirednessThreshold) {
    return 'I am hungry AND I need a walk'
} else if (this.hunger < hungerThreshold && this.fitness > tirednessThreshold){
    return 'I feel great!'
} else if (this.hunger >= hungerThreshold) {
    return 'I am hungry'
} else {
    return 'I need a walk'
}};

/*Pet.prototype.isAlive = function () {
    if(this.fitness <= 0 || this.hunger >= 10 || this.age >= 30){
        return false;
    } else {
        return true;
    }
}

 
 
 
 
 
 
 if (hungerLevel <= 4) {
    alert("I'm hungry :(")
} */



module.exports = Pet;