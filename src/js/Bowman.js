import Character from './Character';
import types from './types';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.attack = types.Bowman.attack;
    this.protection = types.Bowman.protection;
  }
}
