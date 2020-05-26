import Character from './Character';
import types from './types';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = types.Magician.attack;
    this.protection = types.Magician.protection;
  }
}
