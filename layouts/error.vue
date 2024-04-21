<template>
	<div id="errorLayout-container">
		<div id="errorLayout-statusCodeContainer">
			<div
				class="animate__animated animate__bounce animate__delay-2s animate__infinite"
				@click="codeClick(error)"
				id="errorLayout-statusCode"
			>
				{{ error.statusCode }}
			</div>
		</div>

		<div
			v-for="n in 5"
			class="errorLayout-schoggihase"
			:style="{ left: n * 20 + '%' }"
		>
			<img
				v-if="!swordAnimation"
				src="/images/objects/schoggihase.png"
				v-anime="{
					rotate: 360,
					duration: 3000,
					delay: 100,
				}"
			/>
			<img v-if="swordAnimation" src="/images/objects/schoggihaseOhne.png" />
		</div>
		<div
			v-show="hover"
			class="animate__animated animate__rotateInDownRight errorLayout-nimmmich"
			style="--animate-duration: 0.3s"
		>
			<p>Nimm de Error-Code, und denn besser schnell weg!</p>
		</div>
		<div class="errorLayout-path"></div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			hover: false,
			swordAnimation: false,
		};
	},
	mounted() {
		setTimeout(this.onHover, 200);
	},
	computed: {
		...mapGetters({
			getMe: "me/getMe",
		}),
	},
	props: ["error"],
	layout: "default", // you can set a custom layout for the error page
	methods: {
		codeClick(error) {
			this.$store.commit("inventory/SET_STATUSCODE", error.statusCode);
			setTimeout(() => {
				this.$router.push({
					path: "/kulissen/millers/vorMillers",
				});
			}, 1000);
		},
		onHover() {
			this.hover = true;
			setTimeout(() => this.$sounds.swordbasic.play(), 100);
			setTimeout(() => (this.swordAnimation = true), 300);
		},
		onHoverOut() {
			this.hover = false;
			this.swordAnimation = false;
		},
	},
};
</script>

<style lang="scss">
#errorLayout-container {
	background-image: url("/images/textures/baum.jpg");
}

#errorLayout-statusCodeContainer {
	margin-top: 30vh;
	transform: scale(2);
	display: flex;
	justify-content: center;
	align-items: center;
}

#errorLayout-statusContainer {
	text-align: left;
	font-family: Cardinal;
	font-size: 40px;
}

#errorLayout-statusCode {
	text-align: center;
	font-size: 100px;
	background-color: red;
	color: yellow;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: black;
	border: solid 20px yellow;
	border-bottom: none;
	width: 300px;
	border-radius: 50%;
	padding: 10px;
}

.errorLayout-nimmmich {
	z-index: 10;
	pointer-events: none;
	position: fixed;
	font-family: Cardinal;
	color: black;
	background: rgb(105, 105, 105);
	background: linear-gradient(
		180deg,
		rgba(105, 105, 105, 1) 0%,
		rgba(246, 221, 221, 1) 41%,
		rgba(230, 208, 208, 1) 59%,
		rgba(231, 231, 231, 1) 100%
	);
	border-color: red;
	border-radius: 50%;
	right: 0;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border-bottom: solid 30px red;
	transform: translate(0, -50%);
	top: 50vh;
	font-size: 60px;
	width: 80%;
	p {
		padding: 10px 10px 0 0;
		text-align: right;
	}
}

.errorLayout-schoggihase {
	position: absolute;
	z-index: 1;
	left: 50%;
	top: 60%;
	img {
		height: 15%;
		transform: translate(-50%);
	}
}

.errorLayout-path {
	position: absolute;
	width: 100%;
	height: 25%;
	left: 0;
	top: 75%;
	background-image: url("/images/textures/stone1.jpg");
	background-size: 100px;
	clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
	z-index: 0;
	pointer-events: none;
}
</style>
