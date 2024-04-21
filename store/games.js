export const state = () => ({
	eigenerEintrag: false,
	lueckentextWon: false,

  schauspielerDisplay: 'initial',

  mikeWillisNinjaCaught: false,
	mikeWillisNinjaOff: false,

});

export const getters = {
	getEigenerEintrag: (state) => state.eigenerEintrag,
	getLueckentextWon: (state) => state.lueckentextWon,

  getSchauspielerDisplay: (state) => state.schauspielerDisplay,

  getMikeWillisNinjaCaught: (state) => state.mikeWillisNinjaCaught,
	getMikeWillisNinjaOff: (state) => state.mikeWillisNinjaOff,

};

export const mutations = {
	SET_EIGENEREINTRAG(state, value) {
		state.eigenerEintrag = value;
	},
	SET_LUECKENTEXTWON(state, value) {
		state.lueckentextWon = value;
	},
	SET_SCHAUSPIELERDISPLAY(state, value) {
		state.schauspielerDisplay = value;
  },
	SET_MIKEWILLISNINJACAUGHT(state, value) {
		state.mikeWillisNinjaCaught = value;
	},
	SET_MIKEWILLISNINJAOFF(state, value) {
		state.mikeWillisNinjaOff = value;
	},
};

export const actions = {
	setMikeWillisNinjaOff({ commit }) {
		setTimeout(() => {
			commit("SET_MIKEWILLISNINJAOFF", true);
		}, 30000);
	},
};
