export default ({ store, app }, inject) => {
	inject("keyboardcontroller", (event) => {
		if (
			!store.getters["chat/getShowChatWindow"] &&
			!store.getters["chat/getIsTyping"]
		) {
			event.preventDefault();
			switch (event.key) {
				case "a": {
					store.dispatch("me/goLeft");
					break;
				}
				case "d": {
					store.dispatch("me/goRight");
					break;
				}
				case "w": {
					store.dispatch("me/goUp");
					break;
				}
				case "s": {
					store.dispatch("me/goDown");
					break;
				}
				case "Enter": {
				}
				default:
					break;
			}
		}
	});
};
