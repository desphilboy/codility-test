export const numInsertsTillTriple = s => {
	if (s.match(/aaa/)) {
		return -1;
	}

	const a$ = (s.match(/a/g) || []).length;

	const effectiveLen = s.replace(/a/g, '').length;
	const wholeCapacity = (effectiveLen + 1) * 2;

	return wholeCapacity - a$;
};

export default numInsertsTillTriple;
