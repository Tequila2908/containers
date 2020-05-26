
export default class Character {
  constructor(name) {
    if (!name) {
      throw new Error('name отсутствует');
    } else if (String(name).length < 2 || String(name).length > 10) {
      throw new Error('Поле name должно содержать от 2 до 10 символов');
    } else {
      this.name = String(name);
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('Перснаж мертв');
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.protection += this.protection * 0.2;
    this.health = 100;
  }

  damage(count) {
    this.health -= count;
  }
}
