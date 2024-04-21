<template>
		<div class="mobileChat-container">
			<div class="mobileChat-allMessagesContainer">
					<p v-for="message in last10Messages">
						<span>{{ message.from.slice(0, 20) + ": "}}</span>{{message.message.slice(0, 40)}}
					</p>
			</div>
			<div class="mobileChat-godMessageContainer">
				<input autocomplete="off" @keyup.13="sendAndClearMessage()" v-model="myMessage" maxlength="40" name="myMessage" placeholder="Deine 40 Zeichen aus der Seele..." />
			</div>
			<div class="mobileChat-sendGodMessageContainer">
				<button @click="sendAndClearMessage()">Schiggmi</button>
			</div>
			<div class="mobileChat-bg"></div>
		</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	layout: "mobile",

	data() {
		return {};
	},
	created() {},
	mounted() {
		this.socket = this.$nuxtSocket({
			name: "chat",
			channel: "/chat",
			vuex: {
				mutations: [{ allMessages: "chat/SET_ALLMESSAGES" }],
			},
			namespaceCfg: {
				emitters: ["sendMessage"],
			}
		});
	},
	computed: {
		last10Messages: function () {
			return this.getAllMessages.slice(-10);
		},
		...mapGetters({
			getShowChatWindow: "chat/getShowChatWindow",
			getMeName: "me/getMeName",
			getAllMessages: "chat/getAllMessages",
			getMyMessage: "chat/getMyMessage"
		}),
		myMessage: {
			get() {
				return this.getMyMessage.message
			},
			set(value) {
				let temp = { from: "lameass-natel", message: value}
				this.$store.commit('chat/SET_MYMESSAGE', temp)
			}
		}
	},
	methods: {
		sendAndClearMessage() {
			this.sendMessage(this.getMyMessage)
			this.myMessage = ""
		},
	},
};
</script>

<style lang="scss">
.mobileChat-container {
	height: 100vh;
	width: 100vw;
	background-color: bisque;
	overflow: hidden;

	.mobileChat-allMessagesContainer {
		position: relative;
		height: 100%;
		padding: 5% 0 0 5%;
		background-image: url("/images/textures/textur2.jpg");
		z-index: 2;		
		p {
			font-size: 18px;
			padding: 0 10px 8px 5px;
			text-align: left;
			color: black;
			font-family: Universalis;
			max-width: 90vw;
		}
		span {
			border-left: none;
			color: red;
		}
	}

	.mobileChat-godMessageContainer {
		position: fixed;
		bottom: 80px;
		left: 50%;
		width: 100vw;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		z-index: 2;
		padding-top: 10px;
		input {
			text-align: center;
			width: 100%;
			height: 6vh;
			font-family: Universalis;			
			font-size: 17px;
			background-size: 30px;			
			background-image: url("/images/textures/wctaefer.jpg");
			color: black;
			outline: none;
			border: none;
			&::-webkit-input-placeholder { /* Edge */
			color: black;
			}
			&::placeholder {
			color: black;
			}
		}

	}

	.mobileChat-sendGodMessageContainer {
		position: fixed;
		bottom: 20px;
		left: 50%;
				width: 100vw;

		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		z-index: 2;
		filter: invert(1);

	
		button {
			width: 50%;
			font-family: UniversalisBold;			
			font-size: 30px;
			text-align: center;
			outline: none;
			background-size: 200px;			// background: rgb(255,255,255);
			background-image: url("/images/textures/gatsby.jpg");
			border-radius: 40% 0 40% 0;
			color: black;
			border: none;

		}
	}
}

.mobileChat-bg {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-image: url("/images/start/intro-bg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 1;
}
</style>
