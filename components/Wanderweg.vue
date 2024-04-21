<template>
	<div :class="cDirection">
		<p><slot name="text"></slot></p>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	layout: "empty",
	props: {
		direction: {
			type: String,
		},
	},
	created() {},
	mounted() {},
	computed: {
		cDirection: function () {
			if (!this.direction || this.direction === "left")
				return "Wanderweg-arrowLeft";
			if (this.direction === "right") return "Wanderweg-arrowRight";
			if (this.direction === "down") return "Wanderweg-arrowDown";
			if (this.direction === "up") return "Wanderweg-arrowUp";
		},
	},
	methods: {},
};
</script>

<style lang="scss">
@mixin Wanderweg-arrowBase {
	background: #ffb000;
	clip-path: polygon(0% 50%, 23% 0%, 100% 0%, 100% 100%, 23% 100%);
	cursor: w-resize;
	pointer-events: auto;
	width: 120px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	position: absolute;

	&:hover {
		cursor: url("/images/cursors/matterhorn.png"), auto;
	}

	p {
		font-family: Universalis;
	}
}

.Wanderweg-arrowLeft {
	@include Wanderweg-arrowBase;

	p {
		padding-left: 10px;
	}
}

.Wanderweg-arrowRight {
	@include Wanderweg-arrowBase;
	clip-path: polygon(100% 50%, 77% 0%, 0% 0%, 0% 100%, 77% 100%);

	p {
		padding-right: 10px;
	}
}

.Wanderweg-arrowUp {
	@include Wanderweg-arrowBase;
	transform: rotate(90deg);
	p {
	}
}

.Wanderweg-arrowDown {
	@include Wanderweg-arrowBase;
	transform: rotate(-90deg);
}
</style>
