import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  readonly _race: Race;
  readonly _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  readonly _energy: Energy;
  private _name: string;
  constructor(characterName: string) {
    this._name = characterName;
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf(characterName, this._dexterity);
    this._archetype = new Mage(characterName);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get dexterity(): number { return this._dexterity; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get maxLifePoints(): number { return this._maxLifePoints; }
  get lifePoints(): number { return this._lifePoints; }
  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._maxLifePoints += getRandomInt(1, 10);
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    }
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(getRandomInt(1, 10) * this._strength);
  }
}