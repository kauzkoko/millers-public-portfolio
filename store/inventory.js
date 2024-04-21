export function getRandomInt(min, max) {
	let temp = Math.floor(Math.random() * Math.floor(max - min));
	return temp + Math.floor(min);
}

export const state = () => ({
	bier: 0,
	bettflasche: 0,
	schnaps: 0,
	rose: 0,
	coins: 0,
	vogelfutter: 2,
	popcorn: 0,
	cat: 0,
	pegel: 0,
	statusCode: "200",
	statusCodes: [],
});

export const getters = {
	getBier: (state) => state.bier,
	getBettflasche: (state) => state.bettflasche,
	getSchnaps: (state) => state.schnaps,
	getRose: (state) => state.rose,
	getCoins: (state) => state.coins,
	getVogelfutter: (state) => state.vogelfutter,
	getPopcorn: (state) => state.popcorn,
	getCat: (state) => state.cat,
	getPegel: (state) => state.pegel,
	getStatusCode: (state) => state.statusCode,
	getStatusCodes: (state) => state.statusCodes,
	filterStatusCodes: (state, filterValue) => {
		state.statusCodes.filter(() => statusCode === filterValue);
	},
};

export const mutations = {
	SET_BIER(state, bier) {
		state.bier = bier;
	},
	SET_BETTFLASCHE(state, bettflasche) {
		state.bettflasche = bettflasche;
	},
	SET_SCHNAPS(state, schnaps) {
		state.schnaps = schnaps;
	},
	SET_ROSE(state, rose) {
		state.rose = rose;
	},
	SET_COINS(state, coins) {
		state.coins = coins;
	},
	SET_POPCORN(state, popcorn) {
		state.popcorn = popcorn;
	},
	SET_CAT(state, cat) {
		state.cat = cat;
	},
	SET_PEGEL(state, pegel) {
		state.pegel = pegel;
	},
	SET_STATUSCODE(state, code) {
		state.statusCode = code;
	},
	SET_VOGELFUTTER(state, vogelfutter) {
		state.vogelfutter = vogelfutter;
	},
	ADD_STATUSCODES(state, code) {
		state.statusCodes.push(code);
	},
};

export const actions = {
	addBettflasche({ commit, getters }) {
		commit("SET_BETTFLASCHE", getters.getBettflasche + 1);
	},
	removeBettflasche({ commit, getters }) {
		if (bettflasche != 0) commit("SET_BETTFLASCHE", getters.getBettflasche - 1);
	},
	addStatusCode({ commit }, code) {
		commit("ADD_STATUSCODE", code);
	},
	addPopcorn({ commit, getters }) {
		commit("SET_POPCORN", getters.getPopcorn + 1);
	},
	removePopcorn({ commit, getters }) {
		if (popcorn != 0) commit("SET_POPCORN", getters.getPopcorn - 1);
	},
};
