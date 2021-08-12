const getRandomColor = () => {
	const colors = [
		'#A40F6B',
		'#DA3C77',
		'#FD5254',
		'#F577A6',
		'#D1A367',
		'#A58451',
		'#795549',
		'#92A4B0',
		'#536D7A',
		'#5C1F56',
		'#F3B01B',
		'#E1702E',
		'#C81F34',
		'#34495C',
		'#2881BB',
		'#07ABA0',
		'#36C573',
		'#185C46'
	];
	return colors[randomNum(colors.length)];
}

const randomNum = (max) => {
	return Math.floor(Math.random() * max);
}

const getColor = (i) => {
	const colors = colorList()
	return colors[i];
}

const colorList = () => {
	return [
		'#A40F6B',
		'#DA3C77',
		'#FD5254',
		'#F577A6',
		'#D1A367',
		'#A58451',
		'#795549',
		'#92A4B0',
		'#536D7A',
		'#5C1F56',
		'#F3B01B',
		'#E1702E',
		'#C81F34',
		'#34495C',
		'#2881BB',
		'#07ABA0',
		'#36C573',
		'#185C46'
	];
}
export {
	getRandomColor,
	randomNum,
	getColor,
	colorList
}