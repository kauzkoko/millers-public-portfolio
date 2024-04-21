<template>
	<div
		class="BotHoriz-container"
		:style="{
			transform: 'translate(' + lPos + 'vw, ' + horizontalPos + 'vh)',
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
		leftBorder: {
			type: Number,
		},
		rightBorder: {
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
		this.lPos = this.horizontalPos;
		setInterval(() => {
			if (this.lPos + this.speed < this.leftBorder) {
				this.dir = 1;
			} else if (this.lPos + this.speed > this.rightBorder) {
				this.dir = -1;
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
.BotHoriz-container {
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
