import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _populationRanger = 0;

  constructor(
    private _rangerName: string,
  ) {
    super(_rangerName);
    this._energyType = 'stamina';
    Ranger._populationRanger += 1;
  }

  static createdArchetypeInstances() {
    return this._populationRanger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}