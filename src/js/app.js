import Character from './Character';
import Bowman from './Bowman';
import Zombie from './Zombie';
import Daemon from './Daemon';
import Undead from './Undead';
import Magician from './Magician';
import Swordsman from './Swordsman';


const test = new Character('test');
console.log(test);

const test1 = new Zombie();
console.log(test1);

const test2 = new Bowman('test');
console.log(test2);
const test3 = new Swordsman('test');
console.log(test3);
const test4 = new Undead('test');
console.log(test4);
const test5 = new Magician('test');
console.log(test5);
const test6 = new Daemon('test');
console.log(test6);