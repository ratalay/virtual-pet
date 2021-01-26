const Pet = require("../pet.js")

/*describe('tests', () => {
  let Pet;

  beforeEach(() => {
    const fido = new Pet('fido')
  })};*/

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('fido')).toBeInstanceOf(Object);
    })
  });

  describe('create Pet', () => {
    it('creates a Pet with the given name', () => {
      expect(new Pet('fido')).toEqual({
          name: 'fido',
          age: 0,
          hunger: 0,
          fitness: 10,
      });
    });
  });

  describe('growUp', () => {
    it('it increases the age of the given pet by 1*', () => {
      const fido = new Pet('fido');
        fido.growUp();
        expect(fido.age).toEqual(1);
    });
});

describe('constructor', () => {
    it('has a initial age of 0', () => {
      const fido = new Pet('fido');
  
      expect(fido.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increases the hunger and decreases the fitness of the pet as it gets older' , () => {
      const fido = new Pet('fido');
      fido.growUp();
      expect(fido.hunger).toEqual(5);
      expect(fido.fitness).toEqual(7);
    })
  })

  describe('walk', () => {
    it ('increases the fitness by 4 up to 10', () =>{
     const fido = new Pet('fido')
      fido.fitness = 5
      fido.walk();
      expect(fido.fitness).toEqual(9);
      fido.fitness = 7;
      fido.walk();
      expect(fido.fitness).toEqual(10);
    })
})

describe('feed', () => {
 it('feeds the pet to decrease its hunger by 3 units', () => {
  const fido = new Pet('fido');
  fido.hunger = 5;
  fido.feed();
 expect(fido.hunger).toEqual(2);
})
})

describe('checkUp', () => {
  it('should check whether the pet needs to walk and eat', () => {
    const fido = new Pet('fido');
    fido.fitness = 3;
    fido.hunger = 5;
    expect(fido.checkUp()).toEqual('I am hungry AND I need a walk')
  })
})

  describe('checkUp', () => {
  it('should check whether the pet needs to eat', () => {
   const fido = new Pet('fido');
    fido.fitness = 10;
    fido.hunger = 5;
    expect(fido.checkUp()).toEqual('I am hungry')
  })
})
  
  describe('checkUp', () => {
  it('should check whether the pet needs to walk', () => {
    const fido = new Pet('fido');
    fido.fitness = 3;
    fido.hunger = 0;
    expect(fido.checkUp()).toEqual('I need a walk')
 })
})
 describe('checkUp', () => {
it('should check whether the pet has no needs', () => {
  const fido = new Pet('fido');
  fido.fitness = 10;
  fido.hunger = 0;
  expect(fido.checkUp()).toEqual('I feel great!')
})
})