<template>
	<div class="WanderwegStange-container" @click="$emit('wegweiser-click')">
		<div>
			<img
				id="WanderwegStange-stange"
				src="/images/objects/wegweiser_stange.png"
				:style="{ left: cDirection === 1 ? '65%' : '25%' }"
			/>
			<img
				id="WanderwegStange-schild"
				src="/images/objects/wegweiser_schild.png"
				:style="{ transform: `scale(${cDirection}, 1)` }"
			/>

			<p
				:style="{
					right: cDirection === 1 ? '20px' : 'initial',
					left: cDirection === 1 ? 'initial' : '20px',
				}"
			>
				<slot name="text"></slot>
			</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	props: {
		direction: {
			type: String,
		},
	},
	computed: {
		cDirection: function () {
			return this.direction && this.direction === "right" ? -1 : 1;
		},
	},
	methods: {},
};
</script>

<style lang="scss">
.WanderwegStange-container {
	position: absolute;
	font-family: Universalis;
	width: 150px;

	&:hover {
		cursor: url("/images/cursors/flugzeug.png"), auto;
	}

	div {
		position: relative;
		height: 100%;
		width: 100%;

		#WanderwegStange-schild {
			position: absolute;
			z-index: 4;
			width: 100%;
		}

		#WanderwegStange-stange {
			position: absolute;
			left: 65%;
			top: 0;
			z-index: 3;
			width: 15px;
		}

		p {
			white-space: nowrap;
			position: absolute;
			font-size: 22px;
			top: 0;
			right: 20px;
			padding-top: 4%;
			z-index: 5;
		}
	}
}
</style>
