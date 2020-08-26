export const mahadAli = (n, k) => {
	let times = 0;
	let toWin = n;
	let allsLeft = k;
	while (toWin > 1) {
		// console.log(`times:${times}, toWin:${toWin}, allsLeft:${allsLeft}`);
		if (toWin % 2 === 0 && allsLeft > 0 && toWin > 2) {
			times = times + 1;
			toWin = toWin / 2;
			allsLeft = allsLeft - 1;
		} else {
			times = times + 1;
			toWin = toWin - 1;
		}
	}

	return times;
};
