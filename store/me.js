export function getRandomInt(min, max) {
	let temp = Math.floor(Math.random() * Math.floor(max - min));
	return temp + Math.floor(min);
}

const { v4: uuidv4 } = require("uuid");

export const state = () => ({
	meAvatarShow: true,
	me: {
		key: uuidv4(),
		x: getRandomInt(300, 1000),
		y: getRandomInt(300, 1000),
		z: 0,
		roomX: 0,
		roomY: 0,
		roomZ: 0,
		name: "",
		speed: 200,
		styles: {
			transition: "left 0.3s, top 0.3s",
			zIndex: 3,
			top: 0,
		},
		body: {
			headIndex: getRandomInt(0, 5),
			torsoIndex: getRandomInt(0, 5),
			legsIndex: getRandomInt(0, 5),
		},
	},
	avatarAssets: {
		heads: [
			{
				mainUrl: "/images/avatar/head0.png",
				shadowUrl: "/images/avatar/head0-s.png",
				height: "300px",
				width: "300px",
				top: "130px",
				left: "49%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
				transform: "rotate(30deg) translate(-40%,0)"
			},
			{
				mainUrl: "/images/avatar/head1.png",
				shadowUrl: "/images/avatar/head1-s.png",
				height: "300px",
				width: "300px",
				top: "200px",
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
			{
				mainUrl: "/images/avatar/head6.png",
				shadowUrl: "/images/avatar/head6-s.png",
				height: "300px",
				width: "300px",
				top: "100px",
				left: "50%",
				zIndex: 2,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/head7.png",
				shadowUrl: "/images/avatar/head7-s.png",
				height: "400px",
				width: "400px",
				top: "160px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},

		],
		torsos: [
			{
				mainUrl: "/images/avatar/torso0.png",
				shadowUrl: "/images/avatar/torso0-s.png",
				height: "320px",
				width: "350px",
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
				height: "650px",
				width: "1000px",
				top: "180px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "1000px 650px",
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
			{
				mainUrl: "/images/avatar/torso6.png",
				shadowUrl: "/images/avatar/torso6-s.png",
				height: "400px",
				width: "400px",
				top: "300px",
				left: "50%",
				zIndex: 1,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/torso7.png",
				shadowUrl: "/images/avatar/torso7-s.png",
				height: "450px",
				width: "450px",
				top: "240px",
				left: "40%",
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
				top: "520px",
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
				top: "520px",
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
				top: "520px",
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
				top: "520px",
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
				top: "520px",
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
				top: "520px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
			{
				mainUrl: "/images/avatar/legs6.png",
				shadowUrl: "/images/avatar/legs6-s.png",
				height: "350px",
				width: "350px",
				top: "450px",
				left: "50%",
				zIndex: 0,
				scale: 0.5,
				backgroundSize: "cover",
			},
		],
	},
});

export const getters = {
	getMeAvatarShow: (state) => state.meAvatarShow,
	getMe: (state) => state.me,
	getMeKey: (state) => state.me.key,
	getMeSpeed: (state) => state.me.speed,
	getMeName: (state) => state.me.name,
	getMeX: (state) => state.me.x,
	getMeY: (state) => state.me.y,
	getMeZ: (state) => state.me.z,
	getMePosition: (state) => {
		return { x: state.me.x, y: state.me.y, z: state.me.z };
	},
	getMeRoomX: (state) => state.me.roomX,
	getMeRoomY: (state) => state.me.roomY,
	getMeRoomZ: (state) => state.me.roomZ,
	getMeRoom: (state) => {
		return {
			roomX: state.me.roomX,
			roomY: state.me.roomY,
			roomZ: state.me.roomZ,
		};
	},
	getMeStyles: (state) => state.me.styles,
	getMeBody: (state) => {
		return { body: state.me.body };
	},
	getMeHeadIndex: (state) => {
		return state.me.body.headIndex;
	},
	getMeTorsoIndex: (state) => {
		return state.me.body.torsoIndex;
	},
	getMeLegsIndex: (state) => {
		return state.me.body.legsIndex;
	},
	getAvatarAssets: (state) => state.avatarAssets,
	getAvatarAssetsHeads: (state) => state.avatarAssets.heads,
	getAvatarAssetsTorsos: (state) => state.avatarAssets.torsos,
	getAvatarAssetsLegs: (state) => state.avatarAssets.legs,
};

export const mutations = {
	SET_MEAVATARSHOW(state, show) {
		state.meAvatarShow = show;
	},
	SET_MEKEY(state, key) {
		state.me.key = key;
	},
	SET_MEX(state, x) {
		state.me.x = x;
	},
	SET_MEY(state, y) {
		state.me.y = y;
	},
	SET_MEZ(state, z) {
		state.me.z = z;
	},
	SET_MEROOMX(state, roomX) {
		state.me.roomX = roomX;
	},
	SET_MEROOMY(state, roomY) {
		state.me.roomY = roomY;
	},
	SET_MEROOMZ(state, roomZ) {
		state.me.roomZ = roomZ;
	},
	SET_MENAME(state, name) {
		state.me.name = name;
	},
	SET_MESPEED(state, speed) {
		state.me.speed = speed;
	},
	SET_MELEFT(state, left) {
		state.me.styles.left = left + "px";
	},
	SET_METOP(state, top) {
		state.me.styles.top = top + "px";
	},
	SET_MEBOXSHADOW(state, boxshadow) {
		state.me.styles.boxshadow = boxshadow;
	},
	SET_METRANSITION(state, transition) {
		state.me.styles.transition = transition;
	},
	SET_MEHEADINDEX(state, head) {
		state.me.body.headIndex = head;
	},
	SET_METORSOINDEX(state, torso) {
		state.me.body.torsoIndex = torso;
	},
	SET_MELEGSINDEX(state, legs) {
		state.me.body.legsIndex = legs;
	},
};

export const actions = {
	goLeft({ commit, getters }, x) {
		commit("SET_MEX", getters.getMeX - getters.getMeSpeed);
	},
	goRight({ commit, getters }, x) {
		commit("SET_MEX", getters.getMeX + getters.getMeSpeed);
	},
	goUp({ commit, getters }, x) {
		commit("SET_MEY", getters.getMeY - getters.getMeSpeed);
	},
	goDown({ commit, getters }, x) {
		commit("SET_MEY", getters.getMeY + getters.getMeSpeed);
	},
	setMePosition({ commit }, position) {
		commit("SET_MEX", position.x);
		commit("SET_MEY", position.y);
		//commit("SET_MEZ", position.z || 0);
	},
	setMeRoomOfSlug({ commit }, roomOfSlug) {
		if (roomOfSlug[3]) {
			commit("SET_MEROOMX", parseInt(roomOfSlug[1]));
			commit("SET_MEROOMY", parseInt(roomOfSlug[2]));
			commit("SET_MEROOMZ", parseInt(roomOfSlug[3]));
		}
	},
	setMeLeftTop({ commit }, position) {
		commit("SET_MELEFT", position.x);
		commit("SET_METOP", position.y);
	},
	setMeStyles({ commit }, x, y, styles) {
		commit("SET_MELEFT", x + "px");
		commit("SET_METOP", y + "px");
		commit("SET_MEBOXSHADOW", styles.boxshadow);
		commit("SET_METRANSITION", styles.transition);
	},
	setMeHeadNext({ commit, getters }, head) {
		if (getters.getAvatarAssetsHeads.length - 1 <= head)
			commit("SET_MEHEADINDEX", 0);
		else commit("SET_MEHEADINDEX", head + 1);
	},
	setMeHeadBefore({ commit, getters }, head) {
		if (head === 0)
			commit("SET_MEHEADINDEX", getters.getAvatarAssetsHeads.length - 1);
		else commit("SET_MEHEADINDEX", head - 1);
	},
	setMeTorsoNext({ commit, getters }, torso) {
		if (getters.getAvatarAssetsTorsos.length - 1 <= torso)
			commit("SET_METORSOINDEX", 0);
		else commit("SET_METORSOINDEX", torso + 1);
	},
	setMeTorsoBefore({ commit, getters }, torso) {
		if (torso === 0)
			commit("SET_METORSOINDEX", getters.getAvatarAssetsTorsos.length - 1);
		else commit("SET_METORSOINDEX", torso - 1);
	},
	setMeLegsNext({ commit, getters }, legs) {
		if (getters.getAvatarAssetsLegs.length - 1 <= legs)
			commit("SET_MELEGSINDEX", 0);
		else commit("SET_MELEGSINDEX", legs + 1);
	},
	setMeLegsBefore({ commit, getters }, legs) {
		if (legs === 0)
			commit("SET_MELEGSINDEX", getters.getAvatarAssetsLegs.length - 1);
		else commit("SET_MELEGSINDEX", legs - 1);
	},
};
