<template>
	<div
		class="Animals-container"
		:style="[{ transform: `translate(${randomPosition.x}px, ${randomPosition.y}px)` }]"
	>
		<img
			class="animate__animated animate__infinite Animals-animal"
			:src="randomAnimal"
			:class="[classObject]"
			@click="randomSound()"
		/>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters } from "vuex";
const animationList = ["bounce", "pulse", "rubberBand", "shakeX", "headShake", "swing", "tada", "jello"]
const animalSoundsList = ["nai5", "holzboden", "sheep", "lion", "lion2", "dog", "elephant", "rhino", "frog", "pig", "arrow3", "dogtalk_1", "dogtalk_4", "dogtalk_5", "horsedie_03", "whinny_m_01", "wolfattack_2", "wolfattack_3", "wolfattack_4", "wolfdies_3"]

export default {
	props: {
		animal: {
			type: String,
		},
		sound: {
			type: String,
		},
		position: {
			type: Object,
		},
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({}),
		randomAnimal: function () {
			return this.animal ? `/images/animals/animal${this.animal}.png` : `/images/animals/animal${getRandomInt(0, 12)}.png`
		},
		classObject: function () {
			return `animate__${animationList[getRandomInt(0, animationList.length)]}`
		},
		randomPosition: function () {
			return this.position && this.position.x && this.position.y ? { x: this.position.x, y: this.position.y } : { x: getRandomInt(0, 1200), y: getRandomInt(0, 1600) }
		},
		randomAnimalSound: function () {
			return this.sound && animalSoundsList.indexOf(this.sound) != -1 ? animalSoundsList.indexOf(this.sound) : getRandomInt(0, animalSoundsList.length)
		}
	},
	methods: {
		randomSound() {
			this.$sounds[animalSoundsList[this.randomAnimalSound]].play()
		}
	},
};
</script>

<style lang="scss">
.Animals-container {
	top: 0;
	position: absolute;
	width: 60px;
	display: flex;
	justify-content: center;
	z-index: 5;
}
.Animals-animal {
	//wege safari, skaliert nid automatisch mit width heights ka wieso
	width: 60px;
	height: 60px;
}
</style>
