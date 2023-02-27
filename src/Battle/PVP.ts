import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1 : Character | Fighter | SimpleFighter,
    private _player2 : Character | Fighter | SimpleFighter,
  ) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();   
  }
}