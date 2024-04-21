<template>
	<div class="AvatarShadow-Container">
		<div
			class="AvatarShadow-head"
			:style="{
				'background-image': 'url(' + getHeads[getMeHeadIndex].shadowUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				width: getHeads[getMeHeadIndex].width,
				height: getHeads[getMeHeadIndex].height,
				top: getHeads[getMeHeadIndex].top,
				left: getHeads[getMeHeadIndex].left,
				backgroundSize: getHeads[getMeHeadIndex].backgroundSize,
				zIndex: getHeads[getMeHeadIndex].zIndex,
			}"
		></div>
		<div
			class="AvatarShadow-torso"
			:style="{
				'background-image': 'url(' + getTorsos[getMeTorsoIndex].shadowUrl + ')',
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
			class="AvatarShadow-legs"
			:style="{
				backgroundImage: 'url(' + getLegs[getMeLegsIndex].shadowUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				top: getLegs[getMeLegsIndex].top,
				left: getLegs[getMeLegsIndex].left,
				zIndex: getLegs[getMeLegsIndex].zIndex,
				width: getLegs[getMeLegsIndex].width,
				height: getLegs[getMeLegsIndex].height,
				backgroundSize: getLegs[getMeLegsIndex].backgroundSize,
			}"
		></div>
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
.AvatarShadow-head {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 150px;
	transform: translate(-50%, 0);
	background-size: cover;
	opacity: 0.5;
	filter: blur(0.7em);

	z-index: 0;
	mix-blend-mode: normal;
	background-blend-mode: normal;
}

.AvatarShadow-torso {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 300px;
	transform: translate(-50%, 0);
	background-size: cover;
	opacity: 0.5;
	filter: blur(0.7em);

	z-index: 1;
	mix-blend-mode: normal;
	background-blend-mode: normal;
}

.AvatarShadow-legs {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 500px;
	transform: translate(-50%, 0);
	background-size: cover;
	opacity: 0.5;
	filter: blur(0.7em);
	mix-blend-mode: normal;
	background-blend-mode: normal;

	z-index: 0;
}
</style>
