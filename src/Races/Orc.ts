import Race from './Race';

export default class Orc extends Race {
  readonly _lifePoints : number;
  private static populationOrc = 0;
  constructor(private _orcName : string, private _orcDexterity: number) {
    super(_orcName, _orcDexterity);
    this._lifePoints = 74;
    Orc.populationOrc += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return this.populationOrc;
  }
}