import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monster: SimpleFighter[];
  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }

  fight(): number {
    while (this._monster.every(({ lifePoints }) => lifePoints > 0)) {
      this._monster.forEach((monstItem) => {
        this._player.attack(monstItem);
        
        monstItem.attack(this._player);

        if (this._player.lifePoints > 0) {
          return -1;
        }
      });
    } 
    return super.fight();
  }
}
