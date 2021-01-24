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

  describe('getting older and unhealthier', () => {
    it('increases the hunger and decreases the fitness of the pet as it gets older' , () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    })
  })