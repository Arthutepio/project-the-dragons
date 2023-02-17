import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdInstancesCount = 0;
   
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 80;
    
    Elf._createdInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdInstancesCount():number {
    return Elf._createdInstancesCount;
  }
}