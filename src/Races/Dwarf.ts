import Race from './Race';

export default class Dwarf extends Race {
  readonly _lifePoints : number;
  private static populationDwarf = 0;
  constructor(private _dwarfName : string, private _dwarfDexterity: number) {
    super(_dwarfName, _dwarfDexterity);
    this._lifePoints = 80;
    Dwarf.populationDwarf += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return this.populationDwarf;
  }
}