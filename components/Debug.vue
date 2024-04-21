<template>
	<div class="Debug-container">
		<p>GetMeRoom: {{ getMeRoom }}</p>
		<p>GetMe: {{ getMe }}</p>
		<p>getMePosition: {{ getMePosition }}</p>
		<p>getUsers: {{ getUsers }}</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	mounted() {},
	computed: {
		...mapGetters({
			getMe: "me/getMe",
			getMePosition: "me/getMePosition",
			getMeRoom: "me/getMeRoom",
			getUsers: "users/getUsers",
			getMeStyles: "me/getMeStyles",
			getUserPosition: "users/getUserByIndexPosition",
			getUserStyles: "users/getUserByIndexStyles",
		}),
	},
	methods: {},
};
</script>

<style lang="scss">
.Debug-container {
	height: 100%;
	width: 100%;
}
</style>
