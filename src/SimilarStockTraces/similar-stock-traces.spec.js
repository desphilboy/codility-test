import { createTrace, similarStockTrace } from './similar-stock-traces.js';

describe('createTrace', () => {
	it('createsTrace', () => {
		expect(createTrace([7, 7, 7, 10, 10, 10, 4, 4, 6]))
			.toMatchInlineSnapshot(`
		Object {
		  "10": 3,
		  "4": 2,
		  "6": 1,
		  "7": 3,
		}
	`);
	});
});

describe('similarStockTrace', () => {
	it('1,2', () => {
		expect(similarStockTrace([1, 1, 1, 1], [2, 2, 2, 2])).toBe(false);
		expect(similarStockTrace([1, 1, 1], [2, 2, 2])).toBe(true);
	});
});
