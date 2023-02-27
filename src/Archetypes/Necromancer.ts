import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _populationNecromancer = 0;

  constructor(
    private _necromancerName: string,
  ) {
    super(_necromancerName);
    this._energyType = 'mana';
    Necromancer._populationNecromancer += 1;
  }

  static createdArchetypeInstances() {
    return this._populationNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}