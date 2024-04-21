<template>
	<div class="MenuNav-container">
		<div class="MenuNav-avatarContainer" v-on:click="avatarEdit()">
			<img id="MenuNav-avatar" :src="getHeads[getMeHeadIndex].mainUrl" />
			<p>{{ getMeName }}</p>
		</div>
		<div class="MenuNav-links">
			<NuxtLink to="/">Zum Start</NuxtLink>
			<NuxtLink to="/kulissen/start">Ins Getümmel</NuxtLink>
			<NuxtLink to="/kulissen/millers/foyer">Foyer</NuxtLink>
		</div>
		<div class="MenuNav-sax" @click="toggleSounds()">
			<img src="/images/menu/saxoS.png" />
			<p>{{ getAllMuted ? "Sounds aus" : "Sounds an" }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			enabler: true,
		};
	},
	mounted() {},
	computed: {
		...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getMeName: "me/getMeName",
			getAllMuted: "sound/getAllMuted",
		}),
	},
	methods: {
		avatarEdit: function () {
			this.$router.push({ path: "/avatar/avatarEdit" });
		},
		toggleSounds: function () {
			this.$store.dispatch("sound/toggleAllMuted", this.$sounds);
		},
	},
};
</script>

<style lang="scss">
.MenuNav-container {
	padding-left: 30px;
	padding-right: 30px;
	height: 120%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	font-family: Park;
	font-weight: 700;
}

.MenuNav-avatarContainer {
	max-height: 130px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 10%;
	font-family: Jazz;

	p {
		white-space: nowrap;
		font-size: 24px;
		position: absolute;
		top: 70%;
		color: orange;
		filter: drop-shadow(4px 4px 5px black);
	}

	#MenuNav-avatar {
		cursor: pointer;
		&:hover {
			transform: scale(2) rotate(-10deg);
		}
		width: 60%;
		filter: drop-shadow(4px 4px 5px black);
	}
}

.MenuNav-links {
	padding-top: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 22px;
	color: orange;
	max-height: 100%;
	a {
		text-align: center;
		color: black;
		margin: 3px;
		word-break: keep-all;
		white-space: nowrap;
		font-size: 24px;
		@media (max-width: 1200px) {
			font-size: 18px;
		}
	}
}

.MenuNav-sax {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	img {
		transform: rotate(10deg);
		width: 60px;
	}
	p {
		margin-top: -15px;
		color: black;
		z-index: 2;

		font-size: 24px;
	}
}
</style>
