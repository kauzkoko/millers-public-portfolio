<template>
	<div class="eyes-outer">
		<div class="eyes-seil" :style="{ height: seil }" />
		<div class="eyes-container">
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
			<div
				class="mouth"
				:style="{
					borderRadius: 20 + leftEyeLeft / 2 + '%',
					height: 5 + leftEyeLeft / 2 + '%',
					width: '20%',
				}"
			>
				<div class="innerMouth" />
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	layout: "empty",
	props: {
		seil: {
			type: String,
		},
	},
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
			return (this.getMeY / window.innerHeight) * 200;
		},
	},
	watch: {},
	beforeDestroy() {
		window.removeEventListener("mousedown", this.$mousecontrollereyes);
	},
};
</script>

<style lang="scss">
.eyes-outer {
	filter: drop-shadow(0 20px 30px yellow);

	.eyes-seil {
		position: absolute;
		background: rgb(105, 105, 105);
		background: linear-gradient(
			90deg,
			rgba(105, 105, 105, 1) 0%,
			rgba(246, 221, 221, 1) 41%,
			rgba(230, 208, 208, 1) 59%,
			rgba(231, 231, 231, 1) 100%
		);
		min-width: 8px;
		left: 50%;
		z-index: -1;
		transform: translate(-50%, 0);
	}
}

.eyes-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.mouth {
		margin-top: -20%;
		width: 10%;
		height: 10%;
		background: red;
		transition: all 1s;

		.innerMouth {
			width: 90%;
			height: 90%;
			background: black;
			border-radius: 50%;
		}
	}

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
						width: 50%;
						height: 50%;
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
