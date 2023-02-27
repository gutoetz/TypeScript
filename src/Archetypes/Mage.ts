import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _populationMage = 0;

  constructor(
    private _mageName: string,
  ) {
    super(_mageName);
    this._energyType = 'mana';
    Mage._populationMage += 1;
  }

  static createdArchetypeInstances() {
    return this._populationMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}