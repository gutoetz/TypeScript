import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player1 : Character | Fighter | SimpleFighter,
    private _monster : Monster[] | SimpleFighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints > 0 
        && this._monster.every((e) => e.lifePoints > 0)) {
      this._monster.forEach((monster) => this._player1.attack(monster));
      this._monster.forEach((monster) => monster.attack(this._player1));
    }
    return super.fight();   
  }
}