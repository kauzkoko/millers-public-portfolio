<template>
		<div class="mobileChat-container">
			<div class="mobileChat-allMessagesContainer">
					<p v-for="message in last10Messages">
						<span id="from">{{ message.from.slice(0, 20) + ": "}}</span>{{message.message.slice(0, 40)}}
					</p>
			</div>
			<div class="mobileChat-godMessageContainer">
				<input autocomplete="off" @keyup.13="sendAndClearMessage()" v-model="godMessage" maxlength="40" name="godMessage" placeholder="Deine 40 Zeichen aus der Seele..."></input>
			</div>
			<div class="mobileChat-sendGodMessageContainer">
				<button @click="sendAndClearMessage()">Senden</button>
			</div>
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
				emitters: ["sendGodMessage"],
			},
		});
	},
	computed: {
		last10Messages: function () {
			return this.getAllMessages.slice(-10);
		},
		...mapGetters({
			getAllMessages: "chat/getAllMessages",
			getGodMessage: "chat/getGodMessage",
		}),
		godMessage: {
			get() {
				return this.getGodMessage.message;
			},
			set(value) {
				let temp = { from: "God", message: value };
				this.$store.commit("chat/SET_GODMESSAGE", temp);
			},
		},
	},
	methods: {
		sendAndClearMessage() {
			this.sendGodMessage(this.getGodMessage)
			this.godMessage = ""
		},
	},
};
</script>

<style lang="scss">
.mobileChat-container {
	border: solid 5vw black;
	border-radius: 40% 0 40% 0;
	height: 100%;
	width: 100%;
	background-color: black;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 85% auto auto;
	grid-template-areas:
		"allMessagesContainer "
		"godMessageContainer"
		"sendGodMessageContainer";
	font-family: Universalis;

	.mobileChat-allMessagesContainer {
		padding: 13% 0 0 10%;
		grid-area: allMessagesContainer;
		border-radius: 40% 0 20% 0;
		background: rgb(255,255,255);
		background: radial-gradient(circle, rgba(255,255,255,1) 77%, rgba(198,198,198,1) 100%);		
		p {
			font-size: 20px;
			padding: 0 10px 6px 5px;
			text-align: right;
		}
		p:nth-child(2n) {
		}
		#from {
			border-left: none;
			color: red;
		}
	}

	.mobileChat-godMessageContainer {
		grid-area: godMessageContainer;
		display: flex;
		justify-content: left;
		padding-top: 10px;

		input {
			text-align: center;
			width: 80%;
			height: 6vh;
	font-family: Universalis;
			font-size: 17px;
		background: rgb(255,255,255);
		background: radial-gradient(circle, rgba(255,255,255,1) 77%, rgba(198,198,198,1) 100%);			color: black;
			outline: none;
			border-radius: 0 40% 0 40%;
		}
	}

	.mobileChat-sendGodMessageContainer {
		grid-area: sendGodMessageContainer;
		display: flex;
		justify-content: left;
	
		button {
			width: 40%;
			padding: 10px;
	font-family: Universalis;
			font-size: 20px;
			text-align: center;
			outline: none;
		background: rgb(255,255,255);
		background: radial-gradient(circle, rgba(255,255,255,1) 77%, rgba(198,198,198,1) 100%);	
	border-radius: 40% 0 40% 0;

		}
	}
}
</style>
