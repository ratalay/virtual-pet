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
        let Fida = new Pet('Fida');
        Fida.growUp();
        expect(Fida.age).toBe(1);
    });
});