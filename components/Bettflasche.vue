<template>
	<div v-show="bettflascheShow" class="Bettflasche-container">
		<img
			ref="bettflasche"
			class="Bettflasche-bettflasche"
			:class="bettflascheClicked ? 'animate__fadeOut' : ''"
			src="/images/inventory/bettflasche.png"
			@click="bettflascheClick()"
		/>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters, mapActions } from "vuex";

export default {
	props: {},
	data() {
		return {
			bettflascheShow: true,
			bettflascheClicked: false,
		};
	},
	computed: {},
	mounted() {
		this.$refs.bettflasche.addEventListener("animationend", () => {
			this.bettflascheShow = false;
		});
	},
	methods: {
		bettflascheClick() {
			this.bettflascheClicked = true;
			this.addBettflasche();
			this.$sounds.moinmoin.play();
		},
		...mapActions({
			addBettflasche: "inventory/addBettflasche",
		}),
	},
};
</script>

<style lang="scss">
.Bettflasche-container {
	top: 0;
	position: absolute;
	width: 60px;
	display: flex;
	justify-content: center;
	z-index: 5;
	:hover {
		cursor: pointer;
	}
}
.Bettflasche-bettflasche {
	//wege safari, skaliert nid automatisch mit width heights ka wieso
	width: 60px;
	height: 60px;
}
</style>
