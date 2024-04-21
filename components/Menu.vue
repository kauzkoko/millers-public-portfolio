<template>
	<div class="Menu-container">
		<div class="Menu-left">
			<Chat />
		</div>
		<div class="Menu-middle">
			<Inventory />
		</div>
		<div class="Menu-right">
			<MenuNav />
			<!-- <Debug></Debug> -->
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Menu-container {
	position: relative;
	display: grid;
	grid-template-areas: "left middle right";
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 130px;
	// grid-gap: 20px 20px;
	width: 100vw;
	height: 130px;
	z-index: 100;
}

@mixin Menu-mixin {
	background: rgb(194, 0, 0);
	background: radial-gradient(
		circle,
		rgba(194, 0, 0, 1) 0%,
		rgba(97, 0, 0, 1) 80%,
		rgba(64, 0, 0, 1) 90%,
		rgba(200, 0, 0, 1) 96%
	);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	border-top-left-radius: 40%;
	border-top-right-radius: 40%;
	//border-top: solid 2px red;
	box-shadow: 0 -1em 1em rgba(255, 255, 255, 0.3);
}

.Menu-left {
	grid-area: left;
	@include Menu-mixin;
}

.Menu-middle {
	grid-area: middle;
	@include Menu-mixin;
}

.Menu-right {
	grid-area: right;
	@include Menu-mixin;
}
</style>
