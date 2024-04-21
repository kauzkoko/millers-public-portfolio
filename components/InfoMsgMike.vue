<template>
	<div id="InfoMsgMike-container" class="InfoMsgMike-container">
		<p id="InfoMsgMike-header">
			<slot name="header"></slot>
		</p>
		<p id="InfoMsgMike-text">
			<slot name="info"></slot>
		</p>
		<p id="InfoMsgMike-x" @click="instructionGO(), $emit('InfoMsgMike-click')">X</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	props: {
		direction: {
			type: String,
		},
	},
	computed: {
		cDirection: function () {
			return this.direction && this.direction === "right" ? -1 : 1;
		},
	},
	methods: {
		instructionGO: function () {
			document.getElementById("InfoMsgMike-container").style.display = "none";
		},
	},
};
</script>

<style lang="scss">
@keyframes InfoMsgMike-inst {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

#InfoMsgMike-container {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: MediumSlateBlue;
	// border: white solid;
	border-radius: 50%;
	filter: drop-shadow(0 0 3rem MediumSlateBlue);
	font-family: Universalis;
	animation-name: schminken-inst;
	animation-duration: 6s;
}

#InfoMsgMike-x {
	position: absolute;
	width: 7%;
	left: 50%;
	top: 2%;
	transform: translate(-50%, 0);
	color: white;
	font-size: 1.5em;
	text-align: center;
	border: solid white;
	border-radius: 50%;
	cursor: pointer;
}

#InfoMsgMike-header {
	position: absolute;
	width: 100%;
	left: 50%;
	top: 15%;
	transform: translate(-50%, 0);
	color: white;
	font-size: 2.5em;
	text-align: center;
}

#InfoMsgMike-text {
	position: absolute;
	width: 80%;
	left: 50%;
	top: 30%;
	transform: translate(-50%, 0);
	color: white;
	font-size: 1.4em;
	text-align: left;
	padding: 10px;
}

@media screen and (min-width: 1920px) {
  	#InfoMsgMike-text {
		font-size: 2.3em;
	}
	#InfoMsgMike-header {
		font-size: 3.5em;
	}
}
</style>
