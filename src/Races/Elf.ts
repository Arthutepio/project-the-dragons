import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdInstancesCount = 0;
   
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 99;
    
    Elf._createdInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdInstancesCount;
  }
}

const test = new Elf('Manteiga', 50);
console.log(test);