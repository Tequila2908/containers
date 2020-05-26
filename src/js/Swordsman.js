import Character from './Character';
import types from './types';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.attack = types.Swordsman.attack;
    this.protection = types.Swordsman.protection;
  }
}
