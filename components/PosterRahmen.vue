<template>
	<div class="PosterRahmen-container" @click="$emit('poster-click')">
		<div>
			<img
				id="PosterRahmen-stange"
				src="/images/objects/poster_stange.png"
			/>
			<img
				id="PosterRahmen-schild"
				src="/images/objects/poster_rahmen.png"
			/>

			<div
				id="PosterRahmen-poster"
				:style="{ 
					'background-image': 'url(' + this.poster + ')' ,
					'transform': 'rotate(' + this.rotatePoster + ') translate(50%, 0)',
				}"
			>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	props: {
		poster: {
			type: String,
		},
		rotatePoster: {
			type: String,
		},
	},
	computed: {
		posterURL: function () {
			return this.poster
			return this.rotatePoster
		},
	},
	methods: {},
};
</script>

<style lang="scss">
.PosterRahmen-container {
	position: absolute;
	font-family: Universalis;
	width: 150px;

	&:hover {
		cursor: pointer;
	}

	div {
		position: relative;
		height: 100%;
		width: 100%;

		#PosterRahmen-schild {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 4;
			width: 100%;
		}

		#PosterRahmen-stange {
			position: absolute;
			left: 50%;
			top: 0;
			transform: translate(-50%, 0);
			z-index: 3;
			width: 9%;
			pointer-events: none;
		}

		#PosterRahmen-poster {
			position: absolute;
			left: 50%;
			top: 12px;
			width: 85%;
			height: 180px;
			transform: translate(-50%, 0);
			z-index: 5;
			// background-image: url("/images/textures/teppichsmall.jpg");
			background-size: 100% auto;
		}
	}
}
</style>
