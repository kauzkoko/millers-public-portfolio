import Vue from "vue";

export const state = () => ({
	showChatWindow: false,
	isTyping: false,
	myMessage: { from: "", message: "" },
	allMessages: [
		{ from: "Admin", message: "Aloha from Hell!" },
		{ from: "Schneeflocke", message: "Hoi Admin" },
		{
			from: "Admin",
			message: "gg? wms?",
		},
		{ from: "Schneeflocke", message: "Am schminke für de gross Schneefall" },
		{ from: "Admin", message: "Au mit Kajal?" },
		{
			from: "Schneeflocke",
			message: "Nei, die ziite sind verbi...",
		},
		{ from: "Admin", message: "Wele Jahrgang bisch?" },
		{ from: "Schneeflocke", message: "2013" },
		{
			from: "Admin",
			message: "Oh, di weviltigscht Reinkarnation?",
		},
		{ from: "Schneeflocke", message: "Di 52igscht, da johr es paar dezue cho!" },
		{ from: "Admin", message: "Es hört nid uf!" },
		{
			from: "WWW-Troll",
			message: "Da isch imfall en öffentliche Chat!",
		},
	],
	godMessage: { from: "God", message: "" },
});

export const getters = {
	getShowChatWindow: (state) => state.showChatWindow,
	getIsTyping: (state) => state.isTyping,
	getMyMessage: (state) => state.myMessage,
	getGodMessage: (state) => state.godMessage,
	getAllMessages: (state) => state.allMessages,
};

export const mutations = {
	SET_SHOWCHATWINDOW(state, show) {
		state.showChatWindow = show;
	},
	SET_ISTYPING(state, isTyping) {
		state.isTyping = isTyping;
	},
	SET_MYMESSAGE(state, message) {
		state.myMessage = message;
	},
	SET_GODMESSAGE(state, message) {
		state.godMessage = message;
	},
	SET_ALLMESSAGES(state, messages) {
		state.allMessages = messages;
	},
};

export const actions = {
	toggleChatWindow({ commit, getters }) {
		commit("SET_SHOWCHATWINDOW", !getters.getShowChatWindow);
	},
};
