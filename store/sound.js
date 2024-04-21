export const state = () => ({
	allMuted: false,
});

export const getters = {
	getAllMuted: (state) => state.allMuted,
};

export const mutations = {
	SET_ALLMUTED(state, allMuted) {
		state.allMuted = allMuted;
	},
};

export const actions = {
	toggleAllMuted({ commit, getters }, sounds) {
		commit("SET_ALLMUTED", !getters.getAllMuted);
		for (let sound in sounds) {
			sounds[sound].stop();
			sounds[sound].sound.value._muted = getters.getAllMuted;
		}
	},
};
