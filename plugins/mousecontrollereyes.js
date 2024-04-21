export default ({ store, app }, inject) => {
	inject("mousecontrollereyes", (event) => {
		store.dispatch("me/setMePosition", { x: event.clientX, y: event.clientY });
	});
};
