<template>
	<div class="new-container bg-#FFDBDB w-screen h-screen">
		<div
			class="new-title fixed opacity-0 transition-all duration-100"
			:style="{ top: top ? '20vh' : 'unset' }"
		>
			The Meaning Of Life
		</div>
		<img
			class="new-kopf fixed left-60vw bottom--100% h-50vh"
			src="/images/avatar/head2.png"
		/>
		<div
			class="new-links fixed left-100px top-150px text-5rem opacity-0 transition-all duration-50 text-black flex flex-col"
		>
			<NuxtLink class="text-2rem mb-10" to="/mitwirkende">Mitwirkende</NuxtLink>
			<NuxtLink class="text-2rem mb-10" to="/faq">FAQ</NuxtLink>
			<NuxtLink class="text-2rem" to="/impressum">Impressum</NuxtLink>
		</div>
		<NuxtLink
			class="new-los text-black no-underline opacity-0 text-16rem fixed left-100px bottom-50px transition-all duration-500 animate__animated animate__pulse animate__delay-14s animate__infinite"
			to="/tutorial"
			>Los!</NuxtLink
		>
		<div
			class="fixed right-0 bottom-0 w-50px h-50px bg-transparent"
			@click="$router.push('/kulissen/millers/foyer')"
		/>
	</div>
</template>

<script>
export default {
	layout: "empty",
	data() {
		return {
			top: true,
			kopf: null,
			tmol: null,
			links: null,
		};
	},
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		this.loslinks();
		this.head();
		this.title();
		//sets animation to end state, if already on page and back to start
		switch (this.$nuxt.context.from.fullPath) {
			case "/impressum":
			case "/mitwirkende":
			case "/tutorial":
			case "/faq": {
				this.links.seek(this.links.duration);
				this.kopf.seek(this.kopf.duration);
				//manual begin workaround
				this.tmol.seek(this.tmol.duration);
				this.top = false;
				this.$anime.set(".new-title", {
					textAlign: "right",
				});
				break;
			}
			default: {
				this.links.play();
				this.kopf.play();
				this.tmol.play();
			}
		}
	},
	methods: {
		loslinks() {
			this.links = this.$anime({
				targets: ".new-los,.new-links",
				delay: 5000,
				opacity: 1,
				autoplay: false,
			});
		},
		head() {
			this.kopf = this.$anime.timeline({
				easing: "easeOutInBounce",
				autoplay: false,
			});
			this.kopf
				.add({
					targets: ".new-kopf",
					bottom: 0,
					easing: "easeInQuad",
				})
				.add(
					{
						targets: ".new-kopf",
						height: "150vh",
						duration: 100,
						left: "30vw",
					},
					5000
				);
		},
		title() {
			const begin = () => {
				this.top = false;
				this.$anime.set(".new-title", {
					textAlign: "right",
				});
			};
			this.tmol = this.$anime.timeline({
				easing: "easeOutInBounce",
				autoplay: false,
			});
			this.tmol
				.add({
					targets: ".new-title",
					opacity: 1,
					delay: 2000,
					loop: false,
				})
				.add(
					{
						targets: ".new-title",
						right: "10px",
						bottom: "7px",
						fontSize: "2rem",
						duration: 100,
						begin: function () {
							begin();
						},
					},
					5000
				);
		},
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
};
</script>

<style lang="scss">
.new-container {
	font-family: Park;
}

.new-links {
	font-family: Universalis;
	a {
		color: black;
	}
}

.new-title {
	top: 20vh;
	width: 100vw;
	text-align: center;
	font-size: 8vw;
}
</style>
