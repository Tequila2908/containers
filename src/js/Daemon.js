import Character from './Character';
import types from './types';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.attack = types.Daemon.attack;
    this.protection = types.Daemon.protection;
  }
}
