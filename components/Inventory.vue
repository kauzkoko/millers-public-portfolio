<template>
	<div
		class="Inventory-container"
		:style="{ backgroundColor: backgroundColor, color: color }"
	>
		<div id="Inventory-popcorndiv">
			<img src="/images/inventory/popcorn2.png" />
			<p id="Inventory-popcorn">{{ getPopcorn }}</p>
		</div>
		<div>
			<img src="/images/millers/object/schnaps.png" @click="onSchnaps()" />
			<p id="Inventory-schnaps">{{ getSchnaps }}</p>
		</div>
		<div @click="onStatusCode()">
			<div id="Inventory-statusCode">{{ getStatusCode }}</div>
			<div id="Inventory-statusCodeText">Ajax</div>
		</div>
		<div>
			<img
				id="Inventory-bierimg"
				src="/images/millers/object/bier.png"
				@click="onBier()"
			/>
			<p id="Inventory-bier">{{ getBier }}</p>
		</div>
		<div>
			<img
				id="Inventory-roseimg"
				src="/images/millers/object/rose.png"
				@click="onRose()"
			/>
			<p id="Inventory-rose">{{ getRose }}</p>
		</div>
		<div v-show="isPlaying" id="Inventory-drinkDrink">
			<video
				id="Inventory-drinkVideo"
				@ended="endedPlaying()"
				:src="drinkDrinks[drinkDrink]"
				autoplay
			/>
		</div>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters } from "vuex";
export default {
	props: {
		backgroundColor: {
			type: String,
		},
		color: {
			type: String,
		},
	},
	data() {
		return {
			drinkDrinks: [
				"/images/drink/drink1.mp4",
				"/images/drink/drink2.mp4",
				"/images/drink/drink3.mp4",
				"/images/drink/drink4.mp4",
				"/images/drink/drink5.mp4",
				"/images/drink/drink6.mp4",
				"/images/drink/drink7.mp4",
				"/images/drink/drink8.mp4",
				"/images/drink/drink9.mp4",
				"/images/drink/drink10.mp4",
			],
			drinkDrink: -200,
			isPlaying: false,
		};
	},
	watch: {
		getPopcorn: function () {
			this.numberChanged("#Inventory-popcorn");
		},
		getSchnaps: function () {
			this.numberChanged("#Inventory-schnaps");
		},
		getVogelfutter: function () {
			this.numberChanged("#Inventory-vogelfutter");
		},
		getD: function () {
			this.numberChanged("#Inventory-d");
		},
		getStatusCode: function () {
			this.numberChanged("#Inventory-statusCode");
		},
		getBettflasche: function () {
			this.numberChanged("#Inventory-bettflasche");
		},
		getPegel: function () {
			if (this.getPegel >= 100) {
				this.$router.push({ path: "/kulissen/filmriss" });
				this.$store.commit("inventory/SET_PEGEL", this.getPegel - this.getPegel);
			}
		},
	},
	mounted() {},
	computed: {
		...mapGetters({
			getBier: "inventory/getBier",
			getBettflasche: "inventory/getBettflasche",
			getRose: "inventory/getRose",
			getVogelfutter: "inventory/getVogelfutter",
			getStatusCode: "inventory/getStatusCode",
			getPopcorn: "inventory/getPopcorn",
			getSchnaps: "inventory/getSchnaps",
			getCat: "inventory/getCat",
			getPegel: "inventory/getPegel",
		}),
	},
	methods: {
		endedPlaying: function () {
			this.isPlaying = false;
		},
		randomBurp: function () {
			let sfx = getRandomInt(0, 5);
			if (sfx == 0) {
				this.$sounds.burp1.play({ interrupt: true });
			}
			if (sfx == 1) {
				this.$sounds.burp2.play({ interrupt: true });
			}
			if (sfx == 2) {
				this.$sounds.burp3.play({ interrupt: true });
			}
			if (sfx == 3) {
				this.$sounds.burp4.play({ interrupt: true });
			}
			if (sfx == 4) {
				this.$sounds.burp5.play({ interrupt: true });
			}
			if (sfx == 5) {
				this.$sounds.burp6.play({ interrupt: true });
			}
		},
		numberChanged(target) {
			this.$anime({
				targets: target,
				scale: 2,
				duration: 500,
				easing: "easeInQuint",
				direction: "reverse",
			});
		},
		toggleChatWindow() {
			this.$store.dispatch("chat/toggleChatWindow");
		},
		onStatusCode() {
			this.$sounds.shutdown.play();
		},
		onBettflasche() {
			this.$sounds.wolfdie.play();
		},
		onGrappaglas() {
			this.$sounds.explosioncork.play();
		},
		onCat() {
			this.$sounds.struggling1.play();
		},
		onVogelfutter() {
			this.$sounds.keinSpiel.play();
		},
		onD() {
			this.$sounds.keinSpiel.play();
		},
		onSchnaps() {
			if (this.getSchnaps >= 1) {
				this.$store.commit("inventory/SET_SCHNAPS", this.getSchnaps - 1);
				this.$store.commit(
					"inventory/SET_PEGEL",
					this.getPegel + getRandomInt(15, 50)
				);
				if (this.getPegel < 100) {
					this.isPlaying = true;
					setTimeout(() => this.randomBurp(), 500);
					this.drinkDrink = getRandomInt(0, 10);
				}
			}
		},
		onBier() {
			if (this.getBier >= 1) {
				this.$store.commit("inventory/SET_BIER", this.getBier - 1);
				this.$store.commit(
					"inventory/SET_PEGEL",
					this.getPegel + getRandomInt(10, 20)
				);
				if (this.getPegel < 100) {
					this.isPlaying = true;
					setTimeout(() => this.randomBurp(), 500);
					this.drinkDrink = getRandomInt(0, 10);
				}
			}
		},
		onRose() {
			if (this.getRose >= 1) {
				this.$store.commit("inventory/SET_ROSE", this.getRose - 1);
				this.$store.commit(
					"inventory/SET_PEGEL",
					this.getPegel + getRandomInt(10, 40)
				);
				if (this.getPegel < 100) {
					this.isPlaying = true;
					setTimeout(() => this.randomBurp(), 500);
					this.drinkDrink = getRandomInt(0, 10);
				}
			}
		},
	},
};
</script>

<style lang="scss">
.Inventory-container {
	font-size: 13px;
	padding-top: 30px;
	padding-left: 30px;
	padding-right: 30px;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	font-family: Park;

	div {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div #Inventory-statusCode {
		text-align: center;
		background-color: red;
		font-size: 30px;
		color: yellow;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
		border: solid 5px yellow;
		border-bottom: none;
		border-radius: 50%;
		padding: 5px;
		cursor: pointer;
		&:hover {
			transform: scale(1.5) rotate(-5deg);
		}
	}

	div #Inventory-statusCodeText {
		color: black;
		font-size: 22px;
		font-weight: 700px;
		margin-top: -5px;
		cursor: default;
	}

	div p {
		position: absolute;
		color: black;
		font-weight: 700;
		font-size: 30px;
		transform: rotate(-10deg);
		background-color: orange;
		border-radius: 0 50% 0 50%;
		border-width: 0 1px 0 4px;
		margin-top: -50px;
		margin-left: 30px;
		padding: 3px;
		cursor: default;
		pointer-events: none;
	}

	div img {
		position: absolute;
		height: 60%;
		//max-height: 80px;
		cursor: pointer;
		&:hover {
			transform: scale(1.5) rotate(-5deg);
		}
	}
}

#Inventory-bierimg {
	transform: scale(1.5);
	&:hover {
		transform: scale(2) rotate(-40deg);
	}
}

#Inventory-roseimg {
	transform: scale(1.5);
	&:hover {
		transform: scale(2) rotate(-40deg);
	}
}

#Inventory-drinkDrink {
	position: absolute;
	min-width: 100vw;
	min-height: 110vh;
	left: 0;
	top: -94vh;
	pointer-events: none;
	z-index: 100;
	opacity: 1;

	video {
		width: 40%;
	}
}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
	#Inventory-drinkDrink {
		position: absolute;
		width: 100vw;
		height: 120vh;
		left: 0;
		top: -95vh;
		background-size: 100% 100%;
		pointer-events: none;
		z-index: 100;
		opacity: 1;
	}
}
</style>
