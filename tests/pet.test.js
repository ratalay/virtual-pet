const Pet = require("../pet")

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('create new pet', () => {
    it('creates a new pet with the given name', () => {
      expect(new Pet('Fido')).toEqual({
          name: 'Fido',
          age: 0,
          hunger: 0,
          fitness: 10,
      });
    });
  });

  describe('growUp', () => {
    it('it increases the age of the given pet by 1*', () => {
        const Fida = new Pet('Fida');
        Fida.growUp();
        expect(Fida.age).toEqual(1);
    });
});

describe('constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increases the hunger and decreases the fitness of the pet as it gets older' , () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    })
  })

  describe('walk', () => {
    it ('increases the fitness by 4 up to 10', () =>{
      const pet = new Pet('Fido')
      pet.fitness = 5
      pet.walk();
      expect(pet.fitness).toEqual(9);
      pet.fitness = 7;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    })
})

describe('feed', () => {
 it('feeds the pet to decrease its hunger by 3 units', () => {
  const bold = new Pet('bold');
  bold.hunger = 5;
  bold.feed();
 expect(bold.hunger).toEqual(2);
})
})