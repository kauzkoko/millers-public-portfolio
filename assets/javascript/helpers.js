export default function getRandomInt(min, max) {
	let temp = Math.floor(Math.random() * Math.floor(max - min));
	return temp + Math.floor(min);
}
