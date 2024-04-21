import Vue from "vue";

export const state = () => ({
	active: false,
	shotAnimation: false,
	step: 0,
	church: false,
});

export const getters = {
	getStep: (state) => state.step,
	getActive: (state) => state.active,
	getShotAnimation: (state) => state.shotAnimation,
};

export const mutations = {
	SET_ACTIVE(state, active) {
		state.active = active;
	},
	SET_CHURCH(state, church) {
		state.church = church;
	},
	SET_STEP(state, step) {
		state.step = step;
	},
	SET_SHOTANIMATION(state, shotAnimation) {
		state.shotAnimation = shotAnimation;
	},
};

export const actions = {
	stepUp({ commit, getters }) {
		commit("SET_STEP", getters.getStep + 1);
	},
	stepDown({ commit, getters }) {
		commit("SET_STEP", getters.getStep - 1);
	},
	toggleActive({ commit, getters }) {
		commit("SET_ACTIVE", !getters.getActive);
	},
	toggleShotAnimation({ commit, getters }) {
		commit("SET_SHOTANIMATION", !getters.getShotAnimation);
	},
	takeGrappa({ commit, getters, dispatch }) {
		dispatch("toggleShotAnimation");
		setTimeout(() => {
			dispatch("stepUp");
			dispatch("toggleShotAnimation");
		}, 2300);
	},
};
