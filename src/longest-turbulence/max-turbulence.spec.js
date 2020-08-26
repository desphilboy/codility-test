import { turbulence, longestTurbulence } from './max-turbulence.js';

describe('Turbulence library', () => {
	describe('single turbulance', () => {
		it('returns 0 if index out of range', () => {
			expect(turbulence([], 0, 0)).toBe(0);
			expect(turbulence([1], 1, 0)).toBe(0);
		});

		it('returns 1 if next index out of range', () => {
			expect(turbulence([1], 0, 0)).toBe(1);
			expect(turbulence([1, 2, 3, 4, 5], 4, 0)).toBe(1);
			expect(turbulence([1, 2, 3, 4, 5], 4, 1)).toBe(1);
			expect(turbulence([1, 2, 3, 4, 5], 4, -1)).toBe(1);
		});

		it('detects a turbulence', () => {
			expect(turbulence([1, 2, 1, 2], 0, 0)).toBe(4);
			expect(turbulence([1, 2, 1, 1, 1], 0, 0)).toBe(3);
			expect(turbulence([1, 2, 1, 1, 1], 2, 0)).toBe(1);
			expect(turbulence([9, 4, 2, 10, 7, 8, 8, 1, 9], 1, 0)).toBe(5);
			expect(turbulence([9, 4, 2, 10, 7, 8, 8, 1, 9], 5, 0)).toBe(1);
			expect(
				turbulence([1, 1, 1, 1, 1, 5, 4, 7, 3, 8, 2, 1, 1, 1, 1], 4, 0),
			).toBe(7);
			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 0)).toBe(1);
		});

		it('detects a turbulence in invalid cases', () => {
			expect(turbulence([], 20, 0)).toBe(0);
			expect(turbulence([], 0, 0)).toBe(0);
			expect(turbulence([], -1, 0)).toBe(0);
		});

		it('detects a turbulence in tricky cases', () => {
			expect(turbulence([2, 2, 3, 4, 5], 0, 0)).toBe(1);
			expect(turbulence([2, 2, 3, 4, 5], 1, 0)).toBe(2);
			expect(turbulence([2, 2, 3, 4, 5], 2, 0)).toBe(2);
		});

		it('detects a turbulence in edge cases', () => {
			expect(turbulence([1, 2, 3, 4, 5, 6], 0, 0)).toBe(2);
			expect(turbulence([1, 2, 3, 4, 5, 6], 1, 0)).toBe(2);

			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 0)).toBe(1);
			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)).toBe(1);
			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 0)).toBe(1);
		});

		it('minds the direction', () => {
			expect(turbulence([1, 2, 1, 3, 2, 6], 0, -1)).toBe(1);
			expect(turbulence([1, 2, 1, 3, 2, 6], 0, 1)).toBe(6);
			expect(turbulence([1, 2, 1, 3, 2, 6], 1, 1)).toBe(1);
			expect(turbulence([1, 2, 1, 3, 2, 6], 1, -1)).toBe(5);

			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 0)).toBe(1);
			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 1)).toBe(1);
			expect(turbulence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, -1)).toBe(
				1,
			);
		});
	});

	describe('max turbulance', () => {
		it('returns 0 for empty and 1 for single element', () => {
			expect(longestTurbulence([], 0, 0)).toBe(0);
			expect(longestTurbulence([1], 1, 0)).toBe(1);
		});

		it('edge cases', () => {
			expect(longestTurbulence([1, 1], 0, 0)).toBe(1);
			expect(longestTurbulence([1, 2], 1, 0)).toBe(2);

			expect(longestTurbulence([1, 2, 3, 4], 0, 0)).toBe(2);
			expect(longestTurbulence([1, 2, 3, 4], 1, 0)).toBe(2);
			expect(longestTurbulence([1, 2, 3, 4], 2, 0)).toBe(2);
			expect(longestTurbulence([1, 2, 3, 4], 3, 0)).toBe(2);
		});

		it('measures when there is turbulance', () => {
			expect(
				longestTurbulence(
					[1, 1, 1, 1, 1, 5, 4, 7, 3, 8, 2, 1, 1, 1, 1],
					1,
					0,
				),
			).toBe(7);

			expect(
				longestTurbulence(
					[1, 1, 1, 1, 1, 5, 4, 7, 7, 8, 2, 1, 1, 1, 1],
					1,
					0,
				),
			).toBe(4);

			expect(
				longestTurbulence(
					[1, 1, 1, 1, 1, 4, 4, 7, 3, 8, 2, 1, 1, 1, 1],
					1,
					0,
				),
			).toBe(5);
		});
	});
});
