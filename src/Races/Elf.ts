import Race from './Race';

export default class Elf extends Race {
  readonly _lifePoints : number;
  private static populationElf = 0;
  constructor(private _elfName : string, private _elfDexterity: number) {
    super(_elfName, _elfDexterity);
    this._lifePoints = 99;
    Elf.populationElf += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return this.populationElf;
  }
}