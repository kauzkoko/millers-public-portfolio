<template>
	<!-- arth goldau -->
	<div class="prodoer-container">
		<div class="prodoer-main">
			<SpielfeldSlotScaler :scale="0.2">
				<template v-slot:content>
					<WanderwegStange
						style="
							left: 5%;
							top: 70%;
							z-index: 3;
							transform: rotate(20deg) scale(0.9);
						"
						@wegweiser-click="goToCari()"
					>
						<template v-slot:text>Cari</template>
					</WanderwegStange>
					<div class="prodoer-back"></div>
					<div class="prodoer-berg">
						<img class="prodoer-img" src="/images/objects/berg1.png" />
					</div>
					<div class="prodoer-berg2">
						<img class="prodoer-img" src="/images/objects/berg1.png" />
					</div>
					<div class="prodoer-path"></div>
					<div class="SpielfeldAdditions-prodoer-path"></div>
					<div class="prodoer-wolke1">
						<img class="prodoer-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div class="prodoer-wolke3">
						<img class="prodoer-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div class="prodoer-wolke2">
						<img class="prodoer-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div class="prodoer-wolke4">
						<img class="prodoer-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div
						class="prodoer-prod"
						v-on:click="goInside()"
						@mouseover="$sounds.jazz1short.play({ interrupt: true })"
					>
						<img class="prodoer-img" src="~static/images/objects/prodroe2.png" />
					</div>
					<div class="snowflakes">
						<div class="snowflake">
						❅
						</div>
						<div class="snowflake">
						❅
						</div>
						<div class="snowflake">
						❆
						</div>
						<div class="snowflake">
						❄
						</div>
						<div class="snowflake">
						❅
						</div>
						<div class="snowflake">
						❆
						</div>
						<div class="snowflake">
						❄
						</div>
						<div class="snowflake">
						❅
						</div>
						<div class="snowflake">
						❆
						</div>
						<div class="snowflake">
						❄
						</div>
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "104", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zoobackground.sound.value._loop = true
			this.$sounds.zoobackground.play();
		}, 500);
	},
	methods: {
		goInside: function() {
			this.$router.push({ path: "/kulissen/zug/ferien" });
		},
		goToCari: function() {
			this.$router.push({ path: "/kulissen/zug/cari" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes prodoer-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes prodoer-wolke1 {
	0% {
		top: -50%;
	}
	100% {
		top: -10%;
	}
}

@keyframes prodoer-berg {
	0% {
		top: -150%;
	}
	100% {
		top: 0;
	}
}

@keyframes prodoer-wolke3 {
	0% {
		left: -50%;
	}
	100% {
		left: 18%;
	}
}

@keyframes prodoer-wolke2 {
	0% {
		top: -50%;
	}
	100% {
		top: -5%;
	}
}
@keyframes prodoer-wolke4 {
	0% {
		right: -50%;
	}
	100% {
		right: 18%;
	}
}

@keyframes prodoer-berg {
	0% {
		top: -50%;
	}
	100% {
		top: 0%;
	}
}

@keyframes prodoer-berg2 {
	0% {
		top: -50%;
	}
	100% {
		top: 0%;
	}
}

//classes container + grid

.prodoer-container {
	position: absolute;
	display: grid;
	grid-template-areas:
		"main"
		"menu";
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 100px;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: bisque;
}

.prodoer-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

.prodoer-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	animation: prodoer-millers 4s ease-in-out forwards;

	z-index: 0;
}

//classes main

.prodoer-back {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: ghostwhite;
	pointer-events: none;
}

.SpielfeldAdditions-prodoer-path {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	clip-path: polygon(31% 100%, 25% 84%, 23% 71%, 25% 61%, 34% 54%, 39% 53%, 46% 46%, 51% 42%, 49% 36%, 46% 33%, 39% 30%, 32% 28%, 28% 24%, 26% 19%, 26% 15%, 26% 9%, 26% 4%, 27% 0%, 37% 0%, 37% 9%, 41% 12%, 44% 12%, 48% 13%, 53% 14%, 56% 15%, 59% 17%, 61% 21%, 63% 27%, 65% 35%, 66% 43%, 66% 48%, 63% 56%, 59% 56%, 56% 59%, 55% 64%, 57% 68%, 61% 70%, 65% 75%, 69% 78%, 70% 83%, 71% 89%, 71% 96%, 71% 100%);
	cursor: url("/images/icons/walkin.png"), auto;
}

.prodoer-path {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/textures/snow.jpg");
	background-size: 200px;
	clip-path: polygon(31% 100%, 25% 84%, 23% 71%, 25% 61%, 34% 54%, 39% 53%, 46% 46%, 51% 42%, 49% 36%, 46% 33%, 39% 30%, 32% 28%, 28% 24%, 26% 19%, 26% 15%, 26% 9%, 26% 4%, 27% 0%, 37% 0%, 37% 9%, 41% 12%, 44% 12%, 48% 13%, 53% 14%, 56% 15%, 59% 17%, 61% 21%, 63% 27%, 65% 35%, 66% 43%, 66% 48%, 63% 56%, 59% 56%, 56% 59%, 55% 64%, 57% 68%, 61% 70%, 65% 75%, 69% 78%, 70% 83%, 71% 89%, 71% 96%, 71% 100%);

	animation-name: prodoer-path;
	animation-duration: 4s;

	z-index: 1;
	pointer-events: none;
}

.prodoer-wolke1 {
	position: absolute;
	width: 30%;
	height: 40%;
	left: 3%;
	top: -10%;
	transform: scaleX(-1);

	animation-name: prodoer-wolke1;
	animation-duration: 7s;

	z-index: 5;
	pointer-events: none;
}

.prodoer-wolke3 {
	position: absolute;
	width: 25%;
	height: 40%;
	left: 18%;
	top: -15%;
	transform: scaleX(-1);

	animation-name: prodoer-wolke3;
	animation-duration: 7s;

	z-index: 4;
	pointer-events: none;
}

.prodoer-wolke2 {
	position: absolute;
	width: 30%;
	height: 40%;
	right: 3%;
	top: -5%;

	animation-name: prodoer-wolke2;
	animation-duration: 4s;
	transition: all ease-out;

	z-index: 4;
	pointer-events: none;
}

.prodoer-wolke4 {
	position: absolute;
	width: 25%;
	height: 40%;
	right: 18%;
	top: 0;

	animation-name: prodoer-wolke4;
	animation-duration: 6s;
	transition: all ease-out;

	z-index: 5;
	pointer-events: none;
}

.prodoer-prod {
	position: absolute;
	width: 15%;
	height: 20%;
	top: 35%;
	left: 40%;
	transform: scale(1);
	z-index: 1;
	transition: all 1s ease-out;
	cursor: pointer;

	animation-name: prodoer-path;
	animation-duration: 12s;

	&:hover {
		transform: scale(1.2);
		transition: all 1s ease-out;
	}
}

.prodoer-berg {
	position: absolute;
	width: 40%;
	height: 35%;
	right: 3%;
	top: 0%;
	transform: scaleX(-1);
	pointer-events: none;
	z-index: 2;

	animation-name: prodoer-berg;
	animation-duration: 8s;
}

.prodoer-berg2 {
	position: absolute;
	width: 40%;
	height: 30%;
	left: 3%;
	top: 0%;
	pointer-events: none;
	z-index: 2;
	filter: invert(1);

	animation-name: prodoer-berg2;
	animation-duration: 8s;
}

.prodoer-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

.snowflakes {
  pointer-events: none;
}

.snowflake {
  color: #fff;
  font-size: 3em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  pointer-events: none;
}

@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}
</style>
