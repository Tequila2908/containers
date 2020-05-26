import Character from './Character';
import types from './types';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    this.attack = types.Undead.attack;
    this.protection = types.Undead.protection;
  }
}
