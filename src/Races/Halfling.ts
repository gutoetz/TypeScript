import Race from './Race';

export default class Halfling extends Race {
  readonly _lifePoints : number;
  private static populationHalfling = 0;
  constructor(
    private _halflingName : string,
    private _halflingDexterity: number,
  ) {
    super(_halflingName, _halflingDexterity);
    this._lifePoints = 60;
    Halfling.populationHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return this.populationHalfling;
  }
}