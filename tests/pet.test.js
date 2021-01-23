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
