<template>
	<div class="SpielfeldAdditions-eyes eyes-container">
		<div class="eyes">
			<div class="eye rightEye">
				<div class="innerEye leftInnerEye" ref="leftEye">
					<div
						class="iris"
						:style="{ left: leftEyeLeft / 2 + '%', top: leftEyeTop / 2 + '%' }"
					>
						<div
							class="innerIris"
							:style="{ left: leftEyeLeft + '%', top: leftEyeTop + '%' }"
						/>
					</div>
				</div>
			</div>
			<div class="eye leftEye">
				<div class="innerEye rightInnerEye">
					<div
						class="iris"
						:style="{ left: leftEyeLeft / 2 + '%', top: leftEyeTop / 2 + '%' }"
					>
						<div
							class="innerIris"
							:style="{ left: leftEyeLeft + '%', top: leftEyeTop + '%' }"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	layout: "empty",
	data() {
		return {};
	},
	created() {},
	mounted() {
		window.addEventListener("mousedown", this.$mousecontrollereyes);
	},
	computed: {
		...mapGetters({
			getMeX: "me/getMeX",
			getMeY: "me/getMeY",
			getMeZ: "me/getMeZ",
		}),
		leftEyeLeft: function () {
			return (this.getMeX / window.innerWidth) * 100;
		},
		leftEyeTop: function () {
			return (this.getMeY / window.innerHeight) * 100;
		},
	},
	watch: {},
	beforeDestroy() {
		window.removeEventListener("mousedown", this.$mousecontrollereyes);
	},
};
</script>

<style lang="scss">
.eyes-container {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.eyes {
		background-image: url("/images/textures/wctaefer.jpg");
		background-size: 50px;
		width: 70%;
		height: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		border-radius: 50%;

		.eye {
			background: white;
			width: 50%;
			height: 50%;
			border-radius: 50%;

			.innerEye {
				position: relative;
				background-image: url("/images/millers/texture/bird1.jpg");
				background-size: 50px;
				width: 70%;
				height: 70%;
				border-radius: 50%;

				.iris {
					position: absolute;
					background: white;
					width: 30%;
					height: 30%;
					transition: all 1s;
					border-radius: 50%;

					.innerIris {
						position: absolute;
						background: black;
						width: 30%;
						height: 30%;
						left: 50%;
						top: 50%;
						border-radius: 50%;
						transition: all 1s;

						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
}
</style>
