import Character from '../js/Character/Character';
import Team from '../js/TeamWithIterator';

describe('Class Team: ', () => {
  const bowerman = new Character({ name: 'Mirana', type: 'Bowerman' });
  const daemon = new Character({ name: 'Doom', type: 'Daemon' });
  const undead = new Character({ name: 'Pudge', type: 'Undead' });
  const team = new Team();

  test("'add' should correctly add unique character", () => {
    team.add(bowerman);
    expect(team.members.size).toEqual(1);
  });

  test("'add' should throw error, when trying to add a non-unique character", () => {
    expect(() => team.add(bowerman)).toThrow(Error);
  });

  test("'addAll' should correctly add group of unique characters", () => {
    team.addAll(bowerman, daemon, undead);
    expect(team.members.size).toEqual(3);
  });

  test("'toArray' should correctly convert Set-container in array", () => {
    expect(team.toArray()).toEqual([bowerman, daemon, undead]);
  });
});
