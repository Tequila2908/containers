import Team from '../Team';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Undead from '../Undead';

test('Add', () => {
  const team = new Team();
  const bowman = new Bowman('test');
  team.add(bowman);
  expect(team.toArray()).toEqual([bowman]);
});

test('Error', () => {
  const team = new Team();
  const bowman = new Bowman('test');
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow('Персонаж уже добавлен');
});

test('Add all', () => {
  const team = new Team();
  const bowman = new Bowman('11');
  const daemon = new Daemon('22');
  const undead = new Undead('33');
  team.addAll(bowman, daemon, undead, undead, daemon, bowman);
  expect(team.toArray()).toEqual([bowman, daemon, undead]);
});
