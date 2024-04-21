<template>
	<div class="Avatar-Container">
		<div
			class="Avatar-head"
			:style="{
				'background-image': 'url(' + getHeads[getMeHeadIndex].mainUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				width: getHeads[getMeHeadIndex].width,
				height: getHeads[getMeHeadIndex].height,
				top: getHeads[getMeHeadIndex].top,
				left: getHeads[getMeHeadIndex].left,
				backgroundSize: getHeads[getMeHeadIndex].backgroundSize,
				zIndex: getHeads[getMeHeadIndex].zIndex,
				transform: getHeads[getMeHeadIndex].transform,
			}"
		></div>
		<div
			class="Avatar-torso"
			:style="{
				'background-image': 'url(' + getTorsos[getMeTorsoIndex].mainUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				top: getTorsos[getMeTorsoIndex].top,
				left: getTorsos[getMeTorsoIndex].left,
				width: getTorsos[getMeTorsoIndex].width,
				height: getTorsos[getMeTorsoIndex].height,
				backgroundSize: getTorsos[getMeTorsoIndex].backgroundSize,
				zIndex: getTorsos[getMeTorsoIndex].zIndex,
			}"
		></div>
		<div
			class="Avatar-legs"
			:style="{
				backgroundImage: 'url(' + getLegs[getMeLegsIndex].mainUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				top: getLegs[getMeLegsIndex].top,
				left: getLegs[getMeLegsIndex].left,
				zIndex: getLegs[getMeLegsIndex].zIndex,
				width: getLegs[getMeLegsIndex].width,
				height: getLegs[getMeLegsIndex].height,
				backgroundSize: getLegs[getMeLegsIndex].backgroundSize,
			}"
		></div>
		<div class="Avatar-nameContainer">
			<p class="Avatar-name">{{ getMeName }}</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getMeTorsoIndex: "me/getMeTorsoIndex",
			getMeLegsIndex: "me/getMeLegsIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getTorsos: "me/getAvatarAssetsTorsos",
			getLegs: "me/getAvatarAssetsLegs",
			getMeName: "me/getMeName",
		}),
		...mapState({}),
	},
	methods: {},
};
</script>

<style lang="scss">
.Avatar-Container {
	position: absolute;
	pointer-events: none;
}
.Avatar-head {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 150px;
	transform: translate(-50%, 0);
	background-size: cover;

	z-index: 0;
}

.Avatar-torso {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 300px;
	transform: translate(-50%, 0);
	background-size: cover;

	z-index: 1;
}

.Avatar-legs {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 500px;
	transform: translate(-50%, 0);
	background-size: cover;

	z-index: 0;
}

.Avatar-nameContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	left: 50%;
	top: -50px;
	transform: translate(-50%, 0);
	z-index: 1;
	// background-color: ghostwhite;
	padding: 20px;
	border-radius: 50%;
	// border: solid black;

	.Avatar-name {
		font-family: Jazz;
		white-space: nowrap;
		padding-top: 5px;
		font-size: 60px;
		text-align: center;
		color: black;
		text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white,
			2px 2px 0 white;
	}
}
</style>
