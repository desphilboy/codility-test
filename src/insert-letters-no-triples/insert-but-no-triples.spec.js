import numInsertsTillTriple from './insert-but-no-triples.js';

describe('numInsertsTillTriple', () => {
	it('returns -1 for aaa', () => {
		expect(numInsertsTillTriple('aaa')).toBe(-1);
	});

	it('returns 0 for aa', () => {
		expect(numInsertsTillTriple('aa')).toBe(0);
	});

	it('returns 2 for empty string', () => {
		expect(numInsertsTillTriple('')).toBe(2);
	});

	it('returns 1 for a', () => {
		expect(numInsertsTillTriple('a')).toBe(1);
	});

	it('returns 4 for l, 3 for la, 2 for ala', () => {
		expect(numInsertsTillTriple('l')).toBe(4);
		expect(numInsertsTillTriple('la')).toBe(3);
		expect(numInsertsTillTriple('ala')).toBe(2);
	});

	it('returns -1 for anything with a aaa in it', () => {
		expect(numInsertsTillTriple('aaal')).toBe(-1);
		expect(numInsertsTillTriple('aalaaa')).toBe(-1);
		expect(numInsertsTillTriple('hfjskjflksjfsaaalsfsfsf')).toBe(-1);
	});

	it('returns correct number for other strings', () => {
		expect(numInsertsTillTriple('amazing')).toBe(10);
		expect(numInsertsTillTriple('rush')).toBe(10);
		expect(numInsertsTillTriple('aalaamaandaa')).toBe(2);
	});
});
