import { mahadAli } from './all-or-one.js';

describe('Mahadali Gambles all or 1', () => {
	it('returns number of Chips to win if no all is allowed', () => {
		expect(mahadAli(10, 0)).toBe(9);
	});

	it('if no win expected no need to play', () => {
		expect(mahadAli(0, 0)).toBe(0);
		expect(mahadAli(1, 0)).toBe(0);
	});

	it('play only once if you need to win 1', () => {
		expect(mahadAli(2, 0)).toBe(1);
		expect(mahadAli(2, 1)).toBe(1);
	});

	it('play for 41', () => {
		expect(mahadAli(41, 0)).toBe(40);
		expect(mahadAli(41, 1)).toBe(21);
		expect(mahadAli(41, 2)).toBe(12);
		expect(mahadAli(41, 3)).toBe(8);
		expect(mahadAli(41, 4)).toBe(7);
		expect(mahadAli(41, 5)).toBe(7);
	});

	it('play for 23417', () => {
		expect(mahadAli(23417, 0)).toBe(23416);
		expect(mahadAli(23417, 4)).toBe(1468);
		expect(mahadAli(23417, 8)).toBe(103);
		expect(mahadAli(23417, 12)).toBe(24);
		expect(mahadAli(23417, 13)).toBe(23);
		expect(mahadAli(23417, 14)).toBe(23);
	});
});
