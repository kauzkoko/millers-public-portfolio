<template>
	<div v-show="getShowChatWindow" class="ChatWindow-outer">
		<div class="ChatWindow-container" :style="{backgroundColor: backgroundColor, color: color }">
			<div class="ChatWindow-allMessagesContainer">
				<p v-for="message in last10Messages">
					<span class="ChatWindow-from">{{ message.from.slice(0, 20) + ": "}}</span>{{message.message.slice(0, 40)}}
				</p>
			</div>
			<input autocomplete="off" class="ChatWindow-textMyMessage" @keyup.13="sendAndClearMessage()" v-model="myMessage" maxlength="40" name="myMessage" placeholder="Deine 40 Zeichen aus der Seele..."></input>
			<button class="ChatWindow-sendMyMessage" @click="sendAndClearMessage()">Senden</button>
			<div class="ChatWindow-close" @click="toggleChatWindow()" style="pointer-events: auto;">X</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	props: {
		backgroundColor: {
			type: String,
		},
		color: {
			type: String,
		},
	},
	data() {
		return {

		};
	},
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
				let temp = { from: this.getMeName, message: value}
				this.$store.commit('chat/SET_MYMESSAGE', temp)
			}
		}
	},
	methods: {
		toggleChatWindow() {
			this.$store.dispatch("chat/toggleChatWindow");
		},
		sendAndClearMessage() {
			this.sendMessage(this.getMyMessage)
			this.myMessage = ""
		},
	},
};
</script>

<style lang="scss">
.ChatWindow-outer {
	position: fixed;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	z-index: 101;
	pointer-events: none;
	transition: opacity 2s;

	.ChatWindow-container {
		margin-top: 5%;
		pointer-events: auto;
		height: 80%;
		width: 80%;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 1fr auto auto;
		grid-template-areas:
			"allMessagesContainer "
			"textMyMessage"
			"sendMyMessage";
		font-family: Universalis;
		background: rgb(255,255,255);
		background: radial-gradient(circle, rgba(255,255,255,1) 77%, rgba(198,198,198,1) 100%);
		border-top: 50px solid black;
		border-bottom: 50px solid black;
		border-left: 20px solid black;
		border-right: 20px solid black;

		.ChatWindow-allMessagesContainer {
			padding-left: 30px;
			pointer-events: auto;
			background: transparent;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: left;
			line-height: 1.2em;
			box-shadow: 0 0 10px 5px rgba(0, 94, 255, 0.52);
			font-size: 4vh;

			.ChatWindow-from {
				color: red;
			}
		}

		.ChatWindow-textMyMessage {
			outline: none;
			font-family: Universalis;
			pointer-events: auto; 
			margin: auto;
			text-align: center;
			height: 50px;
			width: 50%;
			grid-area: textMyMessage;
			background: transparent;
			box-shadow: 0 0 10px 5px rgba(0, 94, 255, 0.52);
			border: none;
			z-index: 100;
			margin-top: 5px;
			margin-bottom: 5px;
			font-size: 24px;
				&:hover {
				box-shadow: 0 0 10px 5px rgba(0, 94, 255, 1);
			}
		}

		.ChatWindow-sendMyMessage {
			outline: none;
			pointer-events: auto;
			margin: auto;
			font-family: Universalis;
			grid-area: sendMyMessage;
			background: transparent;
			box-shadow: 0 0 10px 5px rgba(0, 94, 255, 0.5);
			border: none;
			font-size: 40px;
			&:hover {
				box-shadow: 0 0 10px 5px rgba(0, 94, 255, 1);
			}
		}

		.ChatWindow-close {
			font-family: sans-serif;
			font-weight: 700;
			text-align: center;
			padding: 3px;
			font-size: 30px;
			width: 40px;
			height: 40px;
			position: fixed;
			border-radius: 50%;
			background-color: red;
			box-shadow: 0 0 20px 20px rgba(0, 94, 255, 0.52);
			color: yellow;
			cursor: pointer;
			&:hover {
				color: red;
				background-color: yellow;
					box-shadow: 0 0 20px 20px rgba(0, 94, 255, 1);

			}
		}
	}
}
</style>
