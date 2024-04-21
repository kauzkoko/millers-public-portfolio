<template>
	<div class="OtherAvatar-Container">
		<div
			class="OtherAvatar-head"
			:style="{
				'background-image': 'url(' + getHeads[userBody.headIndex].mainUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				width: getHeads[userBody.headIndex].width,
				height: getHeads[userBody.headIndex].height,
				top: getHeads[userBody.headIndex].top,
				left: getHeads[userBody.headIndex].left,
				backgroundSize: getHeads[userBody.headIndex].backgroundSize,
				zIndex: getHeads[userBody.headIndex].zIndex,
			}"
		></div>
		<div
			class="OtherAvatar-torso"
			:style="{
				'background-image': 'url(' + getTorsos[userBody.torsoIndex].mainUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				top: getTorsos[userBody.torsoIndex].top,
				left: getTorsos[userBody.torsoIndex].left,
				width: getTorsos[userBody.torsoIndex].width,
				height: getTorsos[userBody.torsoIndex].height,
				backgroundSize: getTorsos[userBody.torsoIndex].backgroundSize,
				zIndex: getTorsos[userBody.torsoIndex].zIndex,
			}"
		></div>
		<div
			class="OtherAvatar-legs"
			:style="{
				backgroundImage: 'url(' + getLegs[userBody.legsIndex].mainUrl + ')',
				transition: 'left 0.2s, top 0.2s',
				top: getLegs[userBody.legsIndex].top,
				left: getLegs[userBody.legsIndex].left,
				zIndex: getLegs[userBody.legsIndex].zIndex,
				width: getLegs[userBody.legsIndex].width,
				height: getLegs[userBody.legsIndex].height,
				backgroundSize: getLegs[userBody.legsIndex].backgroundSize,
			}"
		></div>
		<div class="Avatar-nameContainer">
			<p class="Avatar-name">{{ userName }}</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	props: {
		userBody: {
			type: Object,
		},
		userName: {
			type: String,
		},
	},
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
		}),
		...mapState({}),
	},
	methods: {},
};
</script>

<style lang="scss">
.OtherAvatar-Container {
	position: absolute;
	z-index: 2;
}
.OtherAvatar-head {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 150px;
	transform: translate(-50%, 0);
	background-size: cover;

	z-index: 0;
}

.OtherAvatar-torso {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 300px;
	transform: translate(-50%, 0);
	background-size: cover;

	z-index: 1;
}

.OtherAvatar-legs {
	position: absolute;
	width: 300px;
	height: 300px;
	left: 50%;
	top: 500px;
	transform: translate(-50%, 0);
	background-size: cover;

	z-index: 0;
}

.OtherAvatar-nameContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	left: 50%;
	top: 500px;
	transform: translate(-50%, 0) rotate(5deg);
	z-index: 1;
	background-color: yellow;
	border-radius: 20%;
	border: solid 20px red;

	.OtherAvatar-name {
		padding-top: 5px;
		font-size: 80px;
		text-align: center;
		color: black;
	}
}
</style>
