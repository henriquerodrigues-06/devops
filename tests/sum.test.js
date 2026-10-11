const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
});

test('adds -1 + 1 equal 0', () => {
   expect(sum([-1, 1])).toBe(0); 
});

test('adds 1, 2, 3, 4, 5, 6 to equal 21', () => {
    expect(sum([1, 2, 3, 4, 5, 6])).toBe(21);
});