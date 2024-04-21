import path from "path";
import fs from "fs";

require("dotenv").config();

module.exports = {
	ssr: false,
	target: "static",
	server: {
		port: 3333,
		host: "0.0.0.0",
		//@niki uncomment for serving localhost over https, add localhost.crt to your trusted certificates first (keychain)
		// https: {
		// 	key: fs.readFileSync(path.resolve(__dirname, "localhost.key")),
		// 	cert: fs.readFileSync(path.resolve(__dirname, "localhost.crt"))
		// }
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "The Meaning Of Life",
		htmlAttrs: {
			lang: "de",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
		],
		script: [
			{
				src: "/js/matomo.js",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css -> alles wa do ine isch, sind global styles wo uf jedere page per default ineglade werded
	css: ["~/assets/styles/main.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"~/plugins/keyboardcontroller.js",
		"~/plugins/mousecontroller.js",
		"~/plugins/mousecontrollereyes.js",
		"~/plugins/axios.js",
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["nuxt-socket-io", "@nuxtjs/axios", "@nuxtjs/pwa"],
	io: {
		sockets: [
			{
				name: "chat",
				channel: "/chat",
				url:
					process.env.NODE_ENV === "production"
						? "https://undefined"
						: "0.0.0.0:5555",
				default: true,
				vuex: {},
				namespaces: {},
			},
			{
				name: "spielfeld",
				channel: "/spielfeld",
				url:
					process.env.NODE_ENV === "production"
						? "https://undefined"
						: "0.0.0.0:5555",
				vuex: {},
				namespaces: {},
			},
		],
	},
	build: ["@nuxtjs/dotenv"],
	buildModules: [
		"@nuxtjs/composition-api/module",
		"@noxnox/nuxt-use-sound",
		"nuxt-animejs",
		"@aceforth/nuxt-optimized-images",
		"@nuxtjs/device",
		"@unocss/nuxt",
		"@nuxtjs/pwa",
	],
	unocss: {
		// presets
		uno: true, // enabled `@unocss/preset-uno`
		icons: true, // enabled `@unocss/preset-icons`
		attributify: true, // enabled `@unocss/preset-attributify`,

		// core options
		shortcuts: [],
		rules: [],
	},
	device: {
		defaultUserAgent:
			"Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36",
	},
	optimizedImages: {
		optimizeImages: true,
	},
	generate: {
		// choose to suit your project
		interval: 2000,
	},
	sound: {
		instrumental: {
			src: "/sounds/instrumental.mp3",
			options: {
				volume: 1,
			},
		},
		bird: {
			src: "/sounds/manyvogels.mp3",
			options: {
				volume: 1,
			},
		},
		milkybad1: {
			src: "/sounds/milky/Milky_negative1.mp3",
			options: {
				volume: 1,
			},
		},
		milkybad2: {
			src: "/sounds/milky/Milky_negative2.mp3",
			options: {
				volume: 1,
			},
		},
		milkybad3: {
			src: "/sounds/milky/Milky_negative3.mp3",
			options: {
				volume: 1,
			},
		},
		milkybad4: {
			src: "/sounds/milky/Milky_negative4.mp3",
			options: {
				volume: 1,
			},
		},
		milkybad5: {
			src: "/sounds/milky/Milky_negative5.mp3",
			options: {
				volume: 1,
			},
		},
		milkybad6: {
			src: "/sounds/milky/Milky_negative6.mp3",
			options: {
				volume: 1,
			},
		},
		milkygood1: {
			src: "/sounds/milky/Milky_positive1.mp3",
			options: {
				volume: 1,
			},
		},
		milkygood2: {
			src: "/sounds/milky/Milky_positive2.mp3",
			options: {
				volume: 1,
			},
		},
		milkygood3: {
			src: "/sounds/milky/Milky_positive3.mp3",
			options: {
				volume: 1,
			},
		},
		milkygood4: {
			src: "/sounds/milky/Milky_positive4.mp3",
			options: {
				volume: 1,
			},
		},
		milkygood5: {
			src: "/sounds/milky/Milky_positive5.mp3",
			options: {
				volume: 1,
			},
		},
		milkygood6: {
			src: "/sounds/milky/Milky_positive6.mp3",
			options: {
				volume: 1,
			},
		},
		nai1: {
			src: "/sounds/lueckentext/nai1.m4a",
			options: {
				volume: 1,
			},
		},
		nai2: {
			src: "/sounds/lueckentext/nai2.m4a",
			options: {
				volume: 1,
			},
		},
		nai3: {
			src: "/sounds/lueckentext/nai3.m4a",
			options: {
				volume: 1,
			},
		},
		nai4: {
			src: "/sounds/lueckentext/nai4.m4a",
			options: {
				volume: 1,
			},
		},
		nai5: {
			src: "/sounds/lueckentext/nai5.m4a",
			options: {
				volume: 1,
			},
		},
		holzboden: {
			src: "/sounds/holzboden.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		sheep: {
			src: "/sounds/sheep.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		background1: {
			src: "/sounds/background1.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		zoobackground: {
			src: "/sounds/zoobackground.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		jazz1: {
			src: "/sounds/jazz1.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		jazz2: {
			src: "/sounds/jazz2.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		peops1: {
			src: "/sounds/peops1.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		train1: {
			src: "/sounds/train1.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		train2: {
			src: "/sounds/train2.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		train3: {
			src: "/sounds/train3.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		figgiore: {
			src: "/sounds/figgiore.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		trainpassing: {
			src: "/sounds/trainpassing.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		trainstart: {
			src: "/sounds/trainsstart.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		sbb: {
			src: "/sounds/sbb.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		lion: {
			src: "/sounds/lion.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		lion2: {
			src: "/sounds/lion2.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		dog: {
			src: "/sounds/dog.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		elephant: {
			src: "/sounds/elephant.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		wolf: {
			src: "/sounds/wolf.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		rhino: {
			src: "/sounds/rhino.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		frog: {
			src: "/sounds/frog.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		pig: {
			src: "/sounds/pig.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		jazz1short: {
			src: "/sounds/jazz1_short.mp3",
			options: {
				interrupt: false,
				volume: 0.3,
			},
		},
		jazz2short: {
			src: "/sounds/jazz2_short.mp3",
			options: {
				interrupt: false,
				volume: 0.3,
			},
		},
		zueri: {
			src: "/sounds/songs/zuericaravan.mp3",
			options: {
				interrupt: false,
				volume: 0.1,
			},
		},
		arrow0: {
			src: "/sounds/avatarEdit/arrow0.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		arrow1: {
			src: "/sounds/avatarEdit/arrow1.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		arrow2: {
			src: "/sounds/avatarEdit/arrow2.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		arrow3: {
			src: "/sounds/avatarEdit/arrow3.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		arrow4: {
			src: "/sounds/avatarEdit/arrow4.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		arrow5: {
			src: "/sounds/avatarEdit/arrow5.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		vorhang: {
			src: "/sounds/vorhang.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		swordbasic: {
			src: "/sounds/swordbasic_01.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		dogtalk_1: {
			src: "/sounds/dogtalk_1.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		dogtalk_4: {
			src: "/sounds/dogtalk_4.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		dogtalk_5: {
			src: "/sounds/dogtalk_5.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		horsedie_03: {
			src: "/sounds/horsedie_03.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		whinny_m_01: {
			src: "/sounds/whinny_m_01.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		wolfattack_2: {
			src: "/sounds/wolfattack_2.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		wolfattack_3: {
			src: "/sounds/wolfattack_3.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		wolfattack_4: {
			src: "/sounds/wolfattack_4.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		wolfdies_3: {
			src: "/sounds/wolfdies_3.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraIntro: {
			src: "/sounds/tamara/intro.mp3",
		},
		screamwitch3: {
			src: "/sounds/foyer/screamwitch3.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraMoney1: {
			src: "/sounds/tamara/money1.mp3",
		},
		keinSpiel: {
			src: "/sounds/d/keinspiel.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraMoney2: {
			src: "/sounds/tamara/money2.mp3",
		},
		shutdown: {
			src: "/sounds/inventory/shutdown.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp1: {
			src: "/sounds/tamara/tipp1.mp3",
		},
		wolfdie: {
			src: "/sounds/inventory/wolfdie_01.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp2: {
			src: "/sounds/tamara/tipp2.mp3",
		},
		explosioncork: {
			src: "/sounds/inventory/explosioncork.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp3: {
			src: "/sounds/tamara/tipp3.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp4: {
			src: "/sounds/tamara/tipp4.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp5: {
			src: "/sounds/tamara/tipp5.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp6: {
			src: "/sounds/tamara/tipp6.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp7: {
			src: "/sounds/tamara/tipp7.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp8: {
			src: "/sounds/tamara/tipp8.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp9: {
			src: "/sounds/tamara/tipp9.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp10: {
			src: "/sounds/tamara/tipp10.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp11: {
			src: "/sounds/tamara/tipp11.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tamaraTipp12: {
			src: "/sounds/tamara/tipp12.mp3",
		},
		struggling1: {
			src: "/sounds/inventory/struggling1.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		chicki: {
			src: "/sounds/inventory/chicki.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		moinmoin: {
			src: "/sounds/inventory/moinmoin.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		zukki1: {
			src: "/sounds/zukki/ohlololo.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		zukki2: {
			src: "/sounds/zukki/ohlololo.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		alarm: {
			src: "/sounds/foyer/alarm.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		door: {
			src: "/sounds/foyer/door.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		glass: {
			src: "/sounds/foyer/glass.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		spoton: {
			src: "/sounds/zukki/spoton.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		starwars: {
			src: "/sounds/foyer/starwars.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		church: {
			src: "/sounds/zukki/church.mp3",
			options: {
				interrupt: false,
				volume: 0.6,
			},
		},
		tamaraWelcome: {
			src: "/sounds/foyer/tamara_welcome.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		lueckentext: {
			src: "/sounds/lueckentext/lueckentext.m4a",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		zukkikotzt: {
			src: "/sounds/zukki/zukkikotzt.m4a",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		long1: {
			src: "/sounds/zukki/long1.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		long2: {
			src: "/sounds/zukki/long2.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		long3: {
			src: "/sounds/zukki/long3.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		long4: {
			src: "/sounds/zukki/long4.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		zueriRed: {
			src: "/sounds/zueri/Sample1Red.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		burp1: {
			src: "/sounds/burp/burp1.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		burp2: {
			src: "/sounds/burp/burp2.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		burp3: {
			src: "/sounds/burp/burp3.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		burp4: {
			src: "/sounds/burp/burp4.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		burp5: {
			src: "/sounds/burp/burp5.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		burp6: {
			src: "/sounds/burp/burp6.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		toilet: {
			src: "/sounds/toilet.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		batman: {
			src: "/sounds/batman.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		filmriss: {
			src: "/sounds/filmriss.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		tutato: {
			src: "/sounds/tutato.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		n1: {
			src: "/sounds/lueckentext/n1.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		n2: {
			src: "/sounds/lueckentext/n2.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		n3: {
			src: "/sounds/lueckentext/n3.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		n4: {
			src: "/sounds/lueckentext/n4.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		n5: {
			src: "/sounds/lueckentext/n5.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		n6: {
			src: "/sounds/lueckentext/n6.mp3",
			options: {
				interrupt: false,
				volume: 1,
			},
		},
		y1: {
			src: "/sounds/lueckentext/y1.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y2: {
			src: "/sounds/lueckentext/y2.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y3: {
			src: "/sounds/lueckentext/y3.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y4: {
			src: "/sounds/lueckentext/y4.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y5: {
			src: "/sounds/lueckentext/y5.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y6: {
			src: "/sounds/lueckentext/y6.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y7: {
			src: "/sounds/lueckentext/y7.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y8: {
			src: "/sounds/lueckentext/y8.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y9: {
			src: "/sounds/lueckentext/y9.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y10: {
			src: "/sounds/lueckentext/y10.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y11: {
			src: "/sounds/lueckentext/y11.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y12: {
			src: "/sounds/lueckentext/y12.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y13: {
			src: "/sounds/lueckentext/y13.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
		y14: {
			src: "/sounds/lueckentext/y14.mp3",
			options: {
				interrupt: false,
				volume: 2,
			},
		},
	},
	// pageTransition: {
	// 	name: "page",
	// 	mode: "out-in",
	// 	css: false,

	// 	beforeEnter(el) {
	// 		this.$anime.set(el, {
	// 			opacity: 0,
	// 		});
	// 	},

	// 	enter(el, done) {
	// 		this.$anime({
	// 			targets: el,
	// 			opacity: [0, 1],
	// 			duration: 100,
	// 			easing: "easeInOutSine",
	// 			complete: done,
	// 		});
	// 	},

	// 	leave(el, done) {
	// 		this.$anime({
	// 			targets: el,
	// 			opacity: [1, 0],
	// 			duration: 500,
	// 			easing: "easeInOutSine",
	// 			complete: done,
	// 		});
	// 	},
	// },
};
