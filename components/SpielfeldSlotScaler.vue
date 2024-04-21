<template>
	<div class="Spielfeld-container" :style="{ backgroundColor: backgroundColor }">
		<!-- <DirectionController
			:noTop="false"
			:noRight="false"
			:noBottom="false"
			:noLeft="false"
		/> -->
		<slot name="content"></slot>
		<MikeWillisNinja
			v-if="!getMikeWillisNinjaOff"
			style="z-index: 100000"
			@MikeWillisNinja-click="caught()"
		/>
		<InfoMsgMike
			v-if="getMikeWillisNinjaCaught && !getMikeWillisNinjaOff"
			style="
				left: 50vw;
				top: 50vh;
				width: 50vw;
				height: 50vh;
				z-index: 20;
				transform: translate(-50%, -50%);
			"
		>
			<template v-slot:header>Stirb Langsam!</template>
			<template v-slot:info
				>Du hast den schiesswütigen Mike Willis eingefangen! <br />Dafür laden wir
				dich auf einen Die Hard im Millers ein.<br />
				<a
					target="_blank"
					href="mailto:schulthess@millers.ch?subject=Ich%20hab%20den%20Willis%20geschnappt!&body=Liebes%20Millers-Team%0D%0A%0D%0AAn%20mir%20ist%20soeben%20Mike%20Willis%20vorbeigehuscht%2C%20da%20hab%20ich%20ihn%20prompt%20eingefangen!%0D%0AMensch%2C%20wie%20der%20gezappelt%20hat...%20Krieg%20ich%20jetzt%20einen%20Drink%20auf's%20Haus%3F%0D%0A%0D%0ADanke%20schon%20jetzt%20und%20bis%20bald%20an%20der%20Bar.%0D%0A%0D%0AEs%20gr%C3%BCsst%2C"
				>
					Schreib uns eine Mail</a
				>
				und komm vorbei.<br />
				Unsere Bar ist von Mittwoch bis Samstag für dich am Start. Freitags und
				Samstags sind auch unsere Künstler*innen hinter der Theke für dich
				da!</template
			>
		</InfoMsgMike>
		<AvatarShadow
			v-show="getMeAvatarShow"
			:style="[
				getMeStyles,
				{
					transform: `translate(${
						getMe.x + 42 * scale + (getMe.x - middleWidth) * 0.1
					}px, ${getMe.y - 730 * scale}px) scale(${scale})`,
					transition: `transform 1s`,
				},
			]"
		/>
		<Avatar
			v-show="getMeAvatarShow"
			:style="[
				getMeStyles,
				{
					transform: `translate(${getMe.x + 42 * scale}px, ${
						getMe.y - 730 * scale
					}px) scale(${scale})`,
					transition: `transform 1s`,
				},
			]"
		/>

		<OtherAvatar
			v-for="(user, index) in usersExceptMe"
			:userBody="user.body"
			:userName="user.name"
			:key="user.key"
			:style="[
				user.styles,
				{
					backgroundColor: 'blue',
					transform: `translate(${user.x}px, ${user.y - 200}px) scale(${scale})`,
					transition: `transform 1s`,
				},
			]"
		/>
	</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import getRandomInt from "~/assets/javascript/helpers.js";
const { v4: uuidv4 } = require("uuid");

export default {
	props: {
		backgroundColor: {
			type: String,
		},
		noTop: {
			type: Boolean,
		},
		noRight: {
			type: Boolean,
		},
		noBottom: {
			type: Boolean,
		},
		noLeft: {
			type: Boolean,
		},
		scale: {
			type: Number,
		},
	},
	data() {
		return {};
	},
	created() {},
	mounted() {
		this.$store.commit("me/SET_MEKEY", uuidv4());
		this.socket = this.$nuxtSocket({
			name: "spielfeld",
			channel: "/spielfeld",
			vuex: {
				mutations: [],
				actions: [{ users: "users/setUsers" }],
				emitBacks: [],
			},
			namespaceCfg: {
				emitters: ["me", "mePosition"],
				listeners: [],
				emitBacks: [],
			},
		});
		this.unsubscribeActions = this.$store.subscribeAction((action, state) => {
			if (process.client) {
				if (action.type === "me/setMePosition") {
					this.me({ ...this.getMe, x: action.payload.x, y: action.payload.y });
				}
				if (action.type === "me/setMeRoomOfSlug") {
					if (action.payload[3]) {
						this.me({
							...this.getMe,
							roomX: action.payload[1],
							roomY: action.payload[2],
							roomZ: action.payload[3],
						});
					}
				}
			}
		});
		this.unsubscribeMutations = this.$store.subscribe((mutation, state) => {
			if (
				mutation.type === "me/SET_MEROOMX" ||
				mutation.type === "me/SET_MEROOMY" ||
				mutation.type === "me/SET_MEROOMZ"
			) {
				if (process.client) {
					this.me({ ...this.getMe });
				}
			}
		});
		window.addEventListener("keydown", this.$keyboardcontroller);
		window.addEventListener("mousedown", this.$mousecontroller);
	},
	watch: {},
	computed: {
		middleWidth: function () {
			return window.innerWidth / 2;
		},
		usersExceptMe: function () {
			return this.getUsers.filter(
				(user) =>
					user.roomX === this.getMe.roomX &&
					user.roomY === this.getMe.roomY &&
					user.roomZ === this.getMe.roomZ &&
					user.key != this.getMe.key
			);
		},
		...mapGetters({
			getMeAvatarShow: "me/getMeAvatarShow",
			getMe: "me/getMe",
			getMeStyles: "me/getMeStyles",
			getUsers: "users/getUsers",
			getMikeWillisNinjaCaught: "games/getMikeWillisNinjaCaught",
			getMikeWillisNinjaOff: "games/getMikeWillisNinjaOff",
		}),
	},
	watch: {},
	methods: {
		caught() {
			this.$store.commit("games/SET_MIKEWILLISNINJACAUGHT", true);
			this.$store.dispatch("games/setMikeWillisNinjaOff");
		},
	},
	beforeDestroy() {
		this.unsubscribeActions();
		this.unsubscribeMutations();
		window.removeEventListener("keydown", this.$keyboardcontroller);
		window.removeEventListener("mousedown", this.$mousecontroller);
		if (this.getMikeWillisNinjaCaught)
			this.$store.commit("games/SET_MIKEWILLISNINJAOFF", true);
	},
};
</script>

<style lang="scss">
.Spielfeld-container {
	background: bisque;
	overflow: hidden;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
