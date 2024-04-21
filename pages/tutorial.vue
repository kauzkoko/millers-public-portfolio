<template>
	<div class="tutorial-outer overflow-hidden">
		<WanderwegStange
			direction="right"
			style="
				right: 10%;
				top: 80%;
				z-index: 3;
				transform: scale(1.5) rotate(-10deg);
			"
			@wegweiser-click="$router.push('/avatar/avatarEdit')"
		>
			<template v-slot:text>Los gehts!</template>
		</WanderwegStange>
		<WanderwegStange
			style="right: 20%; top: 90%; z-index: 3; transform: scale(1.2) rotate(10deg)"
			@wegweiser-click="$router.push('/')"
		>
			<template v-slot:text>Menü</template>
		</WanderwegStange>

		<div class="tutorial-container">
			<h1>So funktioniert's</h1>
			<div>
				<p>
					<span style="font-family: Park">THE MEANING OF LIFE</span>
					funktioniert am besten im Vollbildmodus und auf
					<a
						@mouseover="showTooltip = true"
						@mouseleave="showTooltip = false"
						class="text-black"
						:style="{
							background: showTooltip ? 'yellow' : 'transparent',
							textDecoration: showTooltip ? 'none' : 'underline',
						}"
						href="https://www.google.com/intl/de/chrome/"
						target="_blank"
					>
						Google Chrome
						<span
							v-show="showTooltip"
							style="background: yellow;"
						>{{ " " }}herunterladen und installieren</span>
					</a>. Falls du einen anderen Browser verwendest, z.B. Safari, können kleinere
					Probleme auftreten. Oft hilft es, die Seite dann mit
					<img
						src="/images/tutorial/refresh.jpg"
						style="height: 20px"
					/> in der
					Adresszeile neuzuladen.
				</p>
			</div>
			<div>
				<p>Das Spiel lebt von Musik und Geräuschen, deshalb unbedingt Ton einschalten!</p>
			</div>
			<div>
				<p>
					<img src="/images/objects/wegweisersmall.png" style="height: 40px" /> Klick
					auf die Wanderwegschilder, um die Kulisse zu wechseln.
					<img
						src="/images/cursors/flugzeug.png"
						style="height: 30px"
					/> Das blaue
					Flugzeug fliegt dich dann in der Economy-Class an den bezeichneten Ort.
				</p>
			</div>
			<div>
				<p>
					<img src="/images/icons/walkin.png" style="height: 40px" /> Sobald dein
					Mauszeiger als Schuh auftaucht, steuerst du deinen Avatar mit einem
					Mausklick an die geklickte Stelle.
				</p>
			</div>
			<div>
				<p>
					<img src="/images/inventory/popcorn2.png" style="height: 40px" /> Sammle
					Popcorns, um sie gegen grössere und kleinere Spielereien einzutauschen.
					<br />
					<img src="/images/tutorial/popcorn.jpg" style="height: 40px; margin-right: 7px" />Im Menü am unteren Bildschirmrand siehst du, wie viele Popcorns du
					bereits eingesammelt hast. Nimmst du einen Tauschhandel an, werden dir die
					einige gesammelte Popcorns abgezogen.
				</p>
			</div>
		</div>
			<div v-show="false">
			<img src="/images/tamara/tamara.png" />
			<img src="/images/objects/lounge1.png" />
			<img src="/images/new stuff/wctafel.png" />
			<img src="/images/objects/separe.png" />
			<img src="/images/objects/separe_open.png" />
			<img src="/images/objects/lounge1.png" />
			<img src="/images/objects/notausgang.png" />
			<img src="/images/millers/object/millersstage.jpg" />
			<img src="/images/objects/barfg.png" />
			<img src="/images/millers/object/rosstisch.png" />
			<img src="/images/objects/vorhangicon.png" />
			<img src="/images/millers/texture/bird1.jpg" />
			<img src="/images/textures/affenwand.jpg" />
			<img src="/images/textures/barvorhang.jpg" />
			<img src="/images/textures/baum.jpg" />
			<img src="/images/textures/bug.jpg" />
			<img src="/images/textures/dirt.jpg" />
			<img src="/images/textures/gatsby_red.jpg" />
			<img src="/images/textures/gatsby.jpg" />
			<img src="/images/textures/gatsby2.jpg" />
			<img src="/images/textures/grass.jpg" />
			<img src="/images/textures/looney.jpg" />
			<img src="/images/textures/maskenaff.jpg" />
			<img src="/images/textures/perser.jpg" />
			<img src="/images/textures/snow.jpg" />
			<img src="/images/textures/stone1.jpg" />
			<img src="/images/textures/teppichsmall.jpg" />
			<img src="/images/textures/textur.jpg" />
			<img src="/images/textures/textur2.jpg" />
			<img src="/images/textures/wctaefer.jpg" />
			<img src="/images/objects/wolke1.png" />
			<img src="/images/objects/wolke2.png" />
			<img v-for="n in 8" :src="'/images/avatar/head' + n -1 + '.png'" />
			<img v-for="n in 8" :src="'/images/avatar/head' + n - 1 + 's.png'" />			
			<img v-for="n in 8" :src="'/images/avatar/torso' + n -1 + '.png'" />
			<img v-for="n in 8" :src="'/images/avatar/torso' + n - 1 + 's.png'" />			
			<img v-for="n in 7" :src="'/images/avatar/legs' + n -1 + '.png'" />
			<img v-for="n in 7" :src="'/images/avatar/legs' + n - 1 + 's.png'" />
		</div>

	</div>
</template>
<script>
export default {
	layout: "empty",
	data() {
		return {
			showTooltip: false,
		};
	},
	created() { },
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zueri.sound.value._volume = 0.4;
			this.$sounds.zueri.play();
		}, 500);
	},
	computed: {},
	watch: {},
};
</script>

<style lang="scss">
body {
	overflow: hidden;
}
.tutorial-outer {
	// background-image: url("/images/start/intro-bg.jpg");
	// background-repeat: no-repeat;
	// background-size: cover;
	background-color: #dfdbe5;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23a3ac92' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.tutorial-container {
	font-family: Universalis;
	font-size: 3vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-left: 10%;
	flex-direction: column;
	background-color: bisque;
	width: 90vw;
	height: 80vh;
	clip-path: polygon(
		0 5%,
		43% 0,
		100% 12%,
		85% 100%,
		13% 100%,
		0 62%,
		5% 34%
	);

	div {
		margin-bottom: 10px;
		max-width: 85%;
	}

	h1 {
		margin-bottom: 10px;
	}

	p {
		font-size: 0.9em;
		margin-bottom: 10px;
	}

	a {
		text-decoration: none;
	}
}
</style>
