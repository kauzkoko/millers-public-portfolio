<template>
	<div class="default-container">
		<div id="default-rahmenOben"></div>
		<div id="default-rahmenLinks"></div>
		<div id="default-rahmenRechts"></div>
		<Nuxt id="rahmen-nuxt" />
		<div id="default-rahmenUnten"></div>
	</div>
</template>

<style lang="scss">
html {
	font-family: SFDecoTechno, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.default-container {
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-areas:
		"rahmenOben rahmenOben rahmenOben"
		"rahmenLinks nuxt rahmenRechts"
		"rahmenUnten rahmenUnten rahmenUnten";
	grid-template-columns: 100px 1fr 100px;
	grid-template-rows: 100px 1fr 100px;
}

#default-rahmenOben {
	grid-area: rahmenOben;
	background-color: black;
}

#default-rahmenLinks {
	grid-area: rahmenLinks;
	background-color: orange;
}

#default-rahmenRechts {
	grid-area: rahmenRechts;
	background-color: orange;
}

#rahmen-nuxt {
	overflow: hidden;
	max-height: calc(100vh - 200px);
	grid-area: nuxt;
}

#default-rahmenUnten {
	grid-area: rahmenUnten;
	background-color: black;
}
</style>
