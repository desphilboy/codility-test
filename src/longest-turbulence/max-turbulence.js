export const turbulence = (heightArray, index, direction) => {
	if (index >= heightArray.length || heightArray.length === 0) {
		return 0;
	}

	if (index + 1 >= heightArray.length) {
		return 1;
	}

	if (direction === 0) {
		return Math.max(
			turbulence(heightArray, index, -1),
			turbulence(heightArray, index, 1),
		);
	}

	if (
		(direction === 1 && heightArray[index] < heightArray[index + 1]) ||
		(direction === -1 && heightArray[index] > heightArray[index + 1])
	) {
		return 1 + turbulence(heightArray, index + 1, -1 * direction);
	}

	return 1;
};

export const longestTurbulence = heightArray => {
	let maxTurbulance = 0;
	let turbulance = 0;

	for (let i = 0; i < heightArray.length; i++) {
		turbulance = turbulence(heightArray, i, 0);
		maxTurbulance = Math.max(turbulance, maxTurbulance);
	}

	return maxTurbulance;
};
