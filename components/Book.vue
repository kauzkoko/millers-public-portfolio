<template>
	<div class="book-wrap">
		<div class="book">
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
				diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
				diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
				diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
				diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet.
			</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	computed: {
		...mapState({}),
		...mapGetters({}),
	},
	methods: {},
};
</script>

<style lang="scss">
.book-wrap {
	filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.book {
	font-family: "Times New Roman";
	font-size: 5px;
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 1fr 1fr 1fr 1fr;

	p {
		padding-left: 10px;
		padding-top: 5px;
	}
	margin-top: -40px;
	height: 100%;
	width: 50%;
	transform: scale(1.2);
	border-top: solid 6px rgba(200, 200, 200, 1);
	border-right: solid 6px rgba(70, 70, 70, 1);
	border-left: solid 4px rgba(70, 70, 70, 1);
	border-bottom: solid 3px grey;

	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(246, 221, 221, 1) 43%,
		rgba(120, 120, 120, 1) 49%,
		rgba(84, 84, 84, 1) 50%,
		rgba(117, 117, 117, 1) 51%,
		rgba(230, 208, 208, 1) 57%,
		rgba(255, 255, 255, 1) 100%
	);
	clip-path: polygon(50% 4%, 0 0, 0 100%, 50% 95%, 100% 100%, 100% 0);
}
</style>
