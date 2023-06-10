import Team from '../team';

const character1 = {
  name: 'new1',
  type: 'Magician',
};

const character2 = {
  name: 'new2',
  type: 'Bowman',
};

const character3 = {
  name: 'new3',
  type: 'Daemon',
};

test('Successful character adding', () => {
  const inp = new Team();
  inp.add(character1);
  const expected = { members: new Set([character1]) };
  expect(inp).toEqual(expected);
});

test('Unsuccessful character adding', () => {
  const inp = new Team();
  inp.add(character1);
  expect(() => inp.add(character1)).toThrow('Такой персонаж уже в команде');
});

test('Characters array adding', () => {
  const inp = new Team();
  inp.addAll(character1, character2, character3, character1);
  const expected = { members: new Set([character1, character2, character3]) };
  expect(inp).toEqual(expected);
});

test('set of characters to array', () => {
  const inp = new Team();
  inp.addAll(character1, character2, character3);
  const expected = [character1, character2, character3];
  expect(inp.toArray()).toEqual(expected);
});
