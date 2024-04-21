<template>
	<div class="guestbook-container">
		<WanderwegStange
			style="
				left: 5%;
				top: 75%;
				z-index: 9;
				transform: scale(1.2) rotate(10deg);
			"
			@wegweiser-click="goBack()"
			>
			<template v-slot:text>Zurück</template>
		</WanderwegStange>
		<InfoMsg
              style="
                left: 50%;
                top: 15vh;
                width: 40vw;
                height: 40vw;
                z-index: 20;
                transform: translate(-50%, 0);
              "
			 >
            	<template v-slot:header>Zeitkapsel</template>
				<template v-slot:info>Herzlich Willkommen im Jahr 1920! Oder sind wir nicht doch in der Zukunft gelandet? <br>Hier kannst du deine Spuren hinterlassen und neue Besucher von dir grüssen.</template>
		</InfoMsg>
		<div class="guestbook-1"></div>
		<div v-if="showWindow" class="guestbook-zeitkapselWindow animate__animated animate__zoomIn">
			<img id="guestbook-overlay"src="/images/guestbook/pergamentoverlay.png" />
			<textarea autocomplete="off" class="guestbook-myMessage" v-model="myMessage" maxlength="40" name="myMessage" placeholder="Deine Nachricht an die Ewigkeit!" rows="3" cols="30" /> 
			<input autocomplete="off" class="guestbook-myName" @keyup.13="sendAndClearMessage()" v-model="myName" maxlength="20" name="myName" placeholder="Dein Name!"></input>
			<div id="guestbook-hirovogel" @click="sendAndClearMessage()">
				<img  src="/images/guestbook/hirovogel.png" />
				<p>Abschicken</p>
			</div>
			<div id="guestbook-hiroaug" @click="toggleClose()">
				<img  src="/images/guestbook/hiroaug.png" />
				<p>Abbrechen</p>
			</div>
		</div>
		<div v-if="!getEigenerEintrag" class="guestbook-zeitkapsel" @click="toggleClose()">
			<p>Eigene Nachricht</p>
			<img class="animate__animated animate__pulse animate__repeat-3" src="/images/guestbook/zeitkapsel.png" /></div>
		<div class="guestbook-avatarContainer" >
			<p v-if="data.data">								
				<span v-if="name">{{ name }}</span>
			</p>
			<img :src="getHeads[headIndex].mainUrl" /></div>
		<div class="guestbook-sprechblase">
			<div>
				<p v-if="message" id="message">
					{{ message }}
				</p>
			</div>
		</div>
		<div id="guestbook-next"><img src="/images/guestbook/affelinks.png" style="transform: scale(-1, 1)"  @click="next()" /></div>
				<p id="guestbook-nextText">Nächste Nachricht</p>

		<div id="guestbook-previous"><img src="/images/guestbook/affelinks.png" @click="previous()" /></div>
		<p id="guestbook-previousText">Letzte Nachricht</p>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

const GET_MESSAGES = `
query {
  allMessages{
    data {
      name
      message
	  headIndex
      _id
    }
  }
}`;

const CREATE_MESSAGE = `
    mutation($name: String!, $message: String!, $headIndex: Int!) {
        createMessage( data: { name: $name, message: $message, headIndex: $headIndex }) {
            name
            message
			headIndex
            _id
        }
    }
`;

export default {
	layout: "empty",
	data() {
		return {
			data: {},
			messageNumber: 0,
			myMessage: "",
			myName: "",
			createMessageData: {},
			showWindow: false,
			messageSent: false
		};
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "1", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		};
		this.getMessages();
		setTimeout(() => {
			this.$sounds.background1.sound.value._loop = true
			this.$sounds.background1.play();
		}, 500);
	},
	computed: {
		...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getMeName: "me/getMeName",
			getEigenerEintrag: "games/getEigenerEintrag"
		}),
		computedValue: function () {
			return;
		},
		name: function() {
			if (this.data.data && this.data.data.allMessages.data.length) return this.data.data.allMessages.data[this.messageNumber].name
			else return "Irgendjemand"
		},
		message: function() {
			if (this.data.data && this.data.data.allMessages.data.length) return this.data.data.allMessages.data[this.messageNumber].message
			else return "Da ist nix."
		},
		headIndex: function() {
			if (this.data.data && this.data.data.allMessages.data.length) return this.data.data.allMessages.data[this.messageNumber].headIndex
			else return 0
		}
	},
	methods: {
		sendAndClearMessage() {
			this.createMessage()
			this.showWindow = false;
			this.messageSent = true;
			this.$store.commit("games/SET_EIGENEREINTRAG", true)
		},
		toggleClose() {
			this.showWindow = !this.showWindow;
		},
		next() {
			if (this.data.data && this.data.data.allMessages.data.length) {
				if (this.messageNumber < this.data.data.allMessages.data.length - 1) {
					this.messageNumber++;
				} else {
					this.messageNumber = 0;
				}
			}
		},
		previous() {
			if (this.data.data && this.data.data.allMessages.data.length) {
				if (this.messageNumber > 0) {
					this.messageNumber--;
				} else {
					this.messageNumber = this.data.data.allMessages.data.length - 1;
				}
			}
		},
		setToLastEntry() {
			this.messageNumber = this.data.data.allMessages.data.length - 1;
		},
		async getMessages() {
			let query = { query: GET_MESSAGES };
			this.data = await this.$faunaApi.$post("", query);
			this.setToLastEntry()
		},
		async createMessage() {
			let query = {
				query: CREATE_MESSAGE,
				variables: { name: this.myName, message: this.myMessage, headIndex: this.getMeHeadIndex },
			};
			this.createMessageData = await this.$faunaApi.$post("", query);
			this.getMessages()
			this.myMessage = ""
			this.setToLastEntry()
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
	},
};
</script>

<style lang="scss">
.guestbook-container {
	width: 100vw;
	height: 100vh;
	font-family: Universalis;
	z-index: 0;
	background-image: url("/images/guestbook/klasse1920.jpg");
	background-repeat: no-repeat;
	background-size: cover;

	.guestbook-zeitkapselWindow {
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 5;
		display: flex;
		justify-content: center;
		align-items: center; 
		flex-direction: column;

		#guestbook-overlay {
			position: fixed;
			width: 100vw;
			height: 100vh;
			z-index: 1;
		}

		#guestbook-hirovogel {
			position: absolute;
			right: 30vw;
			top: 70vh;
			z-index: 1;
			font-family: Runes;
			font-size: 30px;
			img {
				width: 80px;
				&:hover {
					transform: rotate(10deg) scale(1.3);
					cursor: pointer;
				}
			}
			p:hover {
				cursor: pointer;
			}

		}

		#guestbook-hiroaug {
			position: absolute;
			left: 30vw;
			top: 73vh;
			z-index: 1;
			font-family: Runes;
			font-size: 30px;
			img {
					width: 80px;
					&:hover {
					transform: rotate(10deg) scale(1.3);
					cursor: pointer;
				}
			}
			p:hover {
				cursor: pointer;
			}
		}

		.guestbook-myMessage {
			margin-top: 5vh;
			background: transparent;
			max-width: 25%;
			resize: none;
			color: black;
			border: none;
			outline: none;
			font-size: 5vw;
			font-family: Runes;
			z-index: 2;

			&::-webkit-input-placeholder { /* Edge */
			color: black;
			}
			&::placeholder {
			color: black;
			}
		}

		.guestbook-myName {
			background: transparent;
			color: black;
			border: none;
			outline: none;
			text-align: center;
			font-size: 3vw;
			font-family: Runes;
			z-index: 2;
			transform: translate(-50px, 50px);						&::-webkit-input-placeholder { /* Edge */
			color: black;
			}
			&::placeholder {
			color: black;
			}
		}

	}

	#guestbook-nextText {
		position: fixed;
		top: 56vh;
		right: 0;
		padding-right: 5px;
		transform: translate(0, -50%);
		color: orange;
		font-size: 25px;
		z-index: 2;
		font-family: SFDecoTechno;
		&:hover {
			color: blue;
			cursor: pointer;
		}
	}

	#guestbook-next {
		position: fixed;
		top: 50vh;
		right: 0;
		transform: translate(0, -50%);
		background-image: url("/images/guestbook/weltall.jpg");
		width: 10vw;
		height: 10vw;
		z-index: 1;
		clip-path: polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%);
		display: flex;
		justify-content: center;
		align-items: center; 
		img {
			width: 80%;
		}
		&:hover {
			filter: invert(1);
			cursor: pointer;
		}
	}

		#guestbook-previousText {
		position: fixed;
		top: 56vh;
		left: 0;
		padding-left: 5px;
		transform: translate(0, -50%);
		color: orange;
		font-size: 25px;
		z-index: 2;
		font-family: SFDecoTechno;
		&:hover {
			color: blue;
			cursor: pointer;
		}
	}

	#guestbook-previous {
		position: fixed;
		top: 50vh;
		left: 0;
		transform: translate(0, -50%);
		background-image: url("/images/guestbook/weltall.jpg");
		width: 10vw;
		height: 10vw;
		z-index: 1;
		clip-path: polygon(0 50%, 22% 0, 100% 0, 100% 100%, 22% 100%);
		display: flex;
		justify-content: center;
		align-items: center; 
		img {
			width: 80%;
		}
		&:hover {
			filter: invert(1);
			cursor: pointer;
		}

	}

	.guestbook-zeitkapsel {
		font-family: SFDecoTechno;
		position: fixed;
		left: 5%;
		top: 10%;
		z-index: 1;
		background-color: black;
		background-size: cover;
		border-radius: 50%;
		width: 10vw;
		height: 10vw;
		-webkit-box-shadow: 0px 0px 33px 19px rgba(217,255,0,1);
		-moz-box-shadow: 0px 0px 33px 19px rgba(217,255,0,1);
		box-shadow: 0px 0px 33px 19px rgba(217,255,0,1);

		img {
			 width: 150%;
		}

		p {
			margin-top: 10px;
			text-align: center;
			color: orange;
			padding: 5px;
			//white-space: nowrap;
			font-size: 26px;
			z-index: 6;
			//background-image: url("/images/guestbook/weltall.jpg");
		}
		&:hover {
			transition: transform 1s;
			transform: scale(1.2);
			cursor: pointer;
		}
	}

	.guestbook-1 {
		position: fixed;
		width: 100%;
		height: 100%;
		clip-path: polygon(
			20% 14%,
			20% 37%,
			33% 62%,
			32% 87%,
			25% 100%,
			50% 100%,
			55% 82%,
			53% 49%,
			68% 35%,
			53% 19%,
			41% 8%,
			52% 0,
			24% 0%
		);
		background-image: url("/images/guestbook/weltall.jpg");
		background-size: cover;
		z-index: 1;
	}

	.guestbook-avatarContainer {
		position: fixed;
		top: 40vh;
		left: 30vw;
		background-image: url("/images/guestbook/spacex.png");
		background-size: contain;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 2;
		width: 40vw;

		p {
			font-family: Jazz;
			white-space: nowrap;
			font-size: 60px;
			text-align: center;
			color: black;
			text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white,
				2px 2px 0 white;
			z-index: 3;
		}

		img {
			width: 70%;
			z-index: 2;
		}
	}


	.guestbook-sprechblase {
		position: fixed;
		right: 5vw;
		top: 5vh;
		width: 50vw;
		height: 50vh;
		background: bisque;
		clip-path: polygon(
			7% 24%,
			6% 38%,
			10% 53%,
			33% 57%,
			46% 62%,
			61% 59%,
			73% 65%,
			28% 88%,
			82% 71%,
			89% 53%,
			99% 34%,
			90% 12%,
			61% 6%,
			28% 8%
		);
		z-index: 3;

		div {
			position: relative;
			width: 100%;
			height: 100%;

			#message {
				position: absolute;
				left: 30%;
				top: 30%;
				font-size: 30px;
			}
		}
	}
}
</style>
