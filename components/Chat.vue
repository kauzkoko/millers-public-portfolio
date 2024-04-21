<template>
	<div class="Chat-container">
		<div class="Chat-textContainer">
			<img src="/images/menu/chat.png" />
			<div class="Chat-leftText">
				<p v-for="message in lastThreeMessages">
					{{ message.from.slice(0, 10) + "...:" }}
				</p>
			</div>
			<div class="Chat-rightText">
				<p v-for="message in lastThreeMessages">
					{{ message.message.slice(0, 10) + "..." }}
				</p>
			</div>
		</div>
		<p class="Chat-openClose" @click="toggleChatWindow()">
			{{ getShowChatWindow ? "Chat schliessen" : "Chat öffnen" }}
		</p>
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
		return {};
	},
	mounted() {},
	computed: {
		lastThreeMessages: function () {
			return this.getAllMessages.slice(-3);
		},
		...mapGetters({
			getShowChatWindow: "chat/getShowChatWindow",
			getIsTyping: "chat/getIsTyping",
			getAllMessages: "chat/getAllMessages",
		}),
	},
	methods: {
		toggleChatWindow() {
			this.$store.dispatch("chat/toggleChatWindow");
		},
	},
};
</script>

<style lang="scss">
.Chat-container {
	height: 120%;
	position: relative;
	display: flex-direction;
	justify-content: center;
	flex-direction: row;
	font-family: Universalis;

	.Chat-textContainer {
		margin-top: -30px;
		width: 100%;
		position: relative;
		font-size: 16px;
		pointer-events: none;
		div p {
			text-align: center;
		}

		.Chat-leftText {
			color: blue;
			top: 15%;
			left: 30%;
			position: absolute;
			height: 45%;
			width: 20%;
			p {
				transform: rotate(18deg);
			}
		}
		.Chat-rightText {
			top: 15%;
			right: 30%;
			position: absolute;
			height: 45%;
			width: 20%;
			p {
				transform: rotate(-18deg);
			}
		}
		img {
			width: 100%;
		}
	}

	.Chat-openClose {
		position: absolute;
		text-align: center;
		bottom: 5%;
		left: 50%;
		color: white;
		transform: translate(-50%, 0);
		font-size: 16px;
		padding: 3px;
		background-color: black;
		cursor: pointer;
	}
}
</style>
