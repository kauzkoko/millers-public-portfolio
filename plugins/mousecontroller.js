export default ({ store, app }, inject) => {
	inject("mousecontroller", (event) => {
		if (
			event.target.className === "Spielfeld-container" ||
			event.target.className.startsWith("SpielfeldAdditions")
		) {
			store.dispatch("me/setMePosition", { x: event.clientX, y: event.clientY });
		}
	});
};
