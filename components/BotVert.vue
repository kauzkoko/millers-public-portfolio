<template>
	<div
		class="BotVert-container"
		:style="{
			transform: 'translate(' + horizontalPos + 'vw, ' + lPos + 'vh)',
			transition: 'transform ' + transitionTime + 's',
		}"
	>
		<img ref="bot" src="/images/inventory/d.png" />
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters, mapActions } from "vuex";

export default {
	props: {
		speed: {
			type: Number,
		},
		topBorder: {
			type: Number,
		},
		bottomBorder: {
			type: Number,
		},
		horizontalPos: { type: Number },
		verticalPos: { type: Number },
		interval: { type: Number },
		transitionTime: { type: Number },
	},
	data() {
		return {
			lPos: 0,
			dir: 1,
		};
	},
	computed: {},
	mounted() {
		this.lPos = this.verticalPos;
		setInterval(() => {
			if (this.lPos + this.speed > this.topBorder) {
				this.dir = -1;
			} else if (this.lPos + this.speed < this.bottomBorder) {
				this.dir = 1;
			}
			this.lPos += this.speed * this.dir;
		}, this.interval);
	},
	methods: {
		...mapActions({}),
	},
};
</script>

<style lang="scss">
.BotVert-container {
	top: 0;
	position: absolute;
	width: 60px;
	display: flex;
	justify-content: center;
	z-index: 5;
	img {
		width: 60px;
		height: 60px;
	}
}
</style>
