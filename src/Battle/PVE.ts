import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monster: Monster[];
  constructor(player: Fighter, monster: Monster[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }
}