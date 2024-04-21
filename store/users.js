import Vue from "vue";
const { v4: uuidv4 } = require("uuid");

export function getRandomInt(min, max) {
	let temp = Math.floor(Math.random() * Math.floor(max - min));
	return temp + Math.floor(min);
}

let names = [
	"Dorothea",
	"Arlindzgi",
	"MolasseMAX",
	"Ribelisouup Quick",
	"Tengo Tener",
	"Amerikas 45",
	"Twitsch Streamer",
	"Löwenherz",
];

function fillUsers() {
	let tempUsers = new Array(20);
	let xTemp,
		yTemp = 0;
	for (var i = 0; i < 20; i++) {
		xTemp = getRandomInt(0, 1200);
		yTemp = getRandomInt(0, 1200);
		tempUsers[i] = Object.assign(
			{},
			{
				key: uuidv4(),
				x: xTemp,
				y: yTemp,
				z: 0,
				roomX: 0,
				roomY: 0,
				roomZ: 100,
				name: names[getRandomInt(0, 8)],
				styles: {
					transition: "left 1s, top 1s",
					transform: `translate(${xTemp}px, ${yTemp}px) scale(0.3)`,
					top: 0,
					pointerEvents: "none",
				},
				body: {
					headIndex: getRandomInt(0, 5),
					torsoIndex: getRandomInt(0, 5),
					legsIndex: getRandomInt(0, 5),
				},
			}
		);
	}
	return tempUsers;
}

export const state = () => ({
	users: fillUsers(),

	avatarAssets: {
		heads: [
			{
				mainUrl: "/images/avatar/head0.png",
				shadowUrl: "/images/avatar/head0-s.png",
				height: "300px",
				width: "300px",
				top: "65px",
				left: "49%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/head1.png",
				shadowUrl: "/images/avatar/head1-s.png",
				height: "300px",
				width: "300px",
				top: "230px",
				left: "50%",
				zIndex: 2,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/head2.png",
				shadowUrl: "/images/avatar/head2-s.png",
				height: "300px",
				width: "300px",
				top: "60px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/head3.png",
				shadowUrl: "/images/avatar/head3-s.png",
				height: "300px",
				width: "300px",
				top: "150px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/head4.png",
				shadowUrl: "/images/avatar/head4-s.png",
				height: "300px",
				width: "300px",
				top: "150px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/head5.png",
				shadowUrl: "/images/avatar/head5-s.png",
				height: "300px",
				width: "300px",
				top: "150px",
				left: "50%",
				zIndex: 2,
				scale: 0.5,
				backgroundSize: "cover",
			},
		],
		torsos: [
			{
				mainUrl: "/images/avatar/torso0.png",
				shadowUrl: "/images/avatar/torso0-s.png",
				height: "300px",
				width: "300px",
				top: "300px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/torso1.png",
				shadowUrl: "/images/avatar/torso1-s.png",
				height: "300px",
				width: "300px",
				top: "300px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/torso2.png",
				shadowUrl: "/images/avatar/torso2-s.png",
				height: "300px",
				width: "300px",
				top: "300px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/torso3.png",
				shadowUrl: "/images/avatar/torso3-s.png",
				height: "300px",
				width: "300px",
				top: "300px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/torso4.png",
				shadowUrl: "/images/avatar/torso4-s.png",
				height: "600px",
				width: "1000px",
				top: "200px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "1000px 600px",
			},
			{
				mainUrl: "/images/avatar/torso5.png",
				shadowUrl: "/images/avatar/torso5-s.png",
				height: "300px",
				width: "300px",
				top: "300px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},
		],
		legs: [
			{
				mainUrl: "/images/avatar/legs0.png",
				shadowUrl: "/images/avatar/legs0-s.png",
				height: "300px",
				width: "300px",
				top: "480px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/legs1.png",
				shadowUrl: "/images/avatar/legs1-s.png",
				height: "300px",
				width: "300px",
				top: "480px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/legs2.png",
				shadowUrl: "/images/avatar/legs2-s.png",
				height: "300px",
				width: "300px",
				top: "480px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/legs3.png",
				shadowUrl: "/images/avatar/legs3-s.png",
				height: "300px",
				width: "300px",
				top: "480px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/legs4.png",
				shadowUrl: "/images/avatar/legs4-s.png",
				height: "300px",
				width: "300px",
				top: "480px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/legs5.png",
				shadowUrl: "/images/avatar/legs5-s.png",
				height: "300px",
				width: "300px",
				top: "480px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
		],
	},
});

export const getters = {
	getUsers: (state) => state.users,
};

export const mutations = {
	SET_USER(state, { user, index }) {
		Vue.set(state.users, index, user);
	},
};

export const actions = {
	setUsers({ commit }, users) {
		users.forEach((user, index) => {
			commit("SET_USER", { user: user, index: index });
		});
	},
};
