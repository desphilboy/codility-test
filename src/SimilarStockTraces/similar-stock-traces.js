export const createTrace = arr =>
	arr.reduce((tr, a) => ({ ...tr, [a]: (tr[a] || 0) + 1 }), {});

export const similarStockTrace = (s, t) => {
	if (s.length !== t.length) {
		return 'NO';
	}

	const ts = createTrace(s);
	const tt = createTrace(t);

	let flag = true;

	Object.keys({ ...ts, ...tt }).forEach(k => {
		flag = flag && Math.abs((ts[k] || 0) - (tt[k] || 0)) <= 3;
	});

	return flag;
};
