const reverse = s => {
	var mapObj1 = {
		'26&': 'z',
		'25&': 'y',
		'24&': 'x',
		'23&': 'w',
		'22&': 'v',
		'21&': 'u',
		'20&': 't',
	};
	const str1 = s.replace(
		/26&|25&|24&|23&|22&|21&|20&/g,
		matched => mapObj1[matched],
	);

	var mapObj2 = {
		'0#': 'j',
		'1#': 'k',
		'2#': 'l',
		'3#': 'm',
		'4#': 'n',
		'5#': 'o',
		'6#': 'p',
		'7#': 'q',
		'8#': 'r',
		'9#': 's',
	};
	const str2 = str1.replace(
		/0#|1#|2#|3#|4#|5#|6#|7#|8#|9#/g,
		matched => mapObj2[matched],
	);

	// var mapObj3 = {
	// 	'1': 'a',
	// 	'2': 'b',
	// 	'3': 'c',
	// 	'4': 'd',
	// 	'5': 'e',
	// 	'6': 'f',
	// 	'7': 'g',
	// 	'8': 'h',
	// 	'9': 'i',
	// };
	// const str3 = str2.replace(
	// 	/1|2|3|4|5|6|7|8|9/g,
	// 	matched => mapObj3[matched],
	// );

	const array1 = str2.split(/[()]/);

	return str3;
};
