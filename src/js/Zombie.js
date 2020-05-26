import Character from './Character';
import types from './types';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = types.Zombie.attack;
    this.protection = types.Zombie.protection;
  }
}
