<template>
	<div class="MikeWillis-Container">
		<video src="/videos/mikewillisjaeger.mp4" autoplay></video>
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
			getMeHeadIndex: "users/getMeHeadIndex",
			getMeTorsoIndex: "users/getMeTorsoIndex",
			getMeLegsIndex: "users/getMeLegsIndex",
			getHeads: "users/getAvatarAssetsHeads",
			getTorsos: "users/getAvatarAssetsTorsos",
			getLegs: "users/getAvatarAssetsLegs",
		}),
		...mapState({}),
	},
	methods: {},
};
</script>

<style lang="scss">
.MikeWillis-Container {
	video {
		width: 320px;
	}
}
</style>
