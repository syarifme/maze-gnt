function maze(S) {
	let isLeft = true
	for (let i = 0; i < S; i++) {
		let tmpString = ""
		for (let j = 0; j < S; j++) {
			if ((i %2 != 0 && j != 0 && j != S - 1) || (isLeft && j == 1) || (!isLeft && j == S - 2)) {
				tmpString = `${tmpString} `;
			} else {
				tmpString = `${tmpString}@`;
			}
		}
		if (i % 2 == 0) {
			isLeft = isLeft ? false : true;
		}

		console.log(`${tmpString}\n`)
	}
}
