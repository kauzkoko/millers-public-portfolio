<template>
	<div class="MenuBg-container">
		<div class="MenuBg-1"></div>
		<div class="MenuBg-2"></div>
		<div class="MenuBg-3"></div>
		<div class="MenuBg-4"></div>
		<div class="MenuBg-5"></div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.MenuBg-container {
	position: fixed;
	bottom: 10px;
	left: 0;
	display: grid;
	grid-template-areas: "m1 m2 m3 m4 m5";
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 130px;
	// grid-gap: 20px 20px;
	width: 100vw;
	overflow: hidden;
	height: 130px;
	z-index: 100;
	background: black;
	background: linear-gradient(0deg, black 90%, rgba(170,170,170,0) 100%);
}

@mixin MenuBg-mixin {
	background: rgb(194, 0, 0);
	background: radial-gradient(
		circle,
		rgba(100, 0, 0, 1) 0%,
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
}

.MenuBg-1 {
	@include MenuBg-mixin;
	grid-area: m1;
}

.MenuBg-2 {
	@include MenuBg-mixin;
	grid-area: m2;
}

.MenuBg-3 {
	@include MenuBg-mixin;
	grid-area: m3;
}

.MenuBg-4 {
	@include MenuBg-mixin;
	grid-area: m4;
}

.MenuBg-5 {
	@include MenuBg-mixin;
	grid-area: m5;
}
</style>
