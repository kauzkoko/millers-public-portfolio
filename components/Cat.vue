<template>
	<div v-show="catShow" class="cat-container">
		<img
			ref="cat"
			class="cat-cat"
			:class="catClicked ? 'animate__bounceOut' : ''"
			src="/images/inventory/cat.png"
			@click="catClick()"
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
			catShow: true,
			catClicked: false,
		};
	},
	computed: {},
	mounted() {
		this.$refs.cat.addEventListener("animationend", () => {
			this.catShow = false;
		});
	},
	methods: {
		catClick() {
			this.catClicked = true;
			this.addcat();
			this.$sounds.chicki.play();
		},
		...mapActions({
			addCat: "inventory/addCat",
		}),
	},
};
</script>

<style lang="scss">
.cat-container {
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
.cat-cat {
	//wege safari, skaliert nid automatisch mit width heights ka wieso
	width: 50px;
	height: 70px;
}
</style>
