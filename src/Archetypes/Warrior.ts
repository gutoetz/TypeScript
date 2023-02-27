import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _populationWarrior = 0;

  constructor(
    private _warriorName: string,
  ) {
    super(_warriorName);
    this._energyType = 'stamina';
    Warrior._populationWarrior += 1;
  }

  static createdArchetypeInstances() {
    return this._populationWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}