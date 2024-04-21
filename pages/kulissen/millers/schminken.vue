<template v-slot:empty>
<!-- Milky -->
  <div class="schminken-container">
    <!-- Main -->
    <div class="schminken-main">
    	<!-- Kulisse -->
            <InfoMsg
              style="
                left: 50%;
                top: 50%;
                width: 40%;
                height: 60%;
                z-index: 3;
                transform: translate(-50%, -50%);
              "
					  >
              <template v-slot:header>Diva Routine</template>
					  	<template v-slot:info>Mach Mike Willis zur noch grösseren Hollywood Diva, als dass er sie schon ist!</br>Aber Achtung, geschminkt und gebürstet wird nur der Reihenfolge nach.</br> Keine Sorge, Milky Diamond hilft dir dabei.</template>
					  </InfoMsg>
          <!-- </div> -->
          <div class="schminken-spiegelback">
          </div>
          <div id="schminken-lipstick1"
            v-bind:style="{
              'background-image': 'url(' + this.lipstick1 + ')',
            }"
          ></div>
          <div id="schminken-lipstick2"
            v-bind:style="{
              'background-image': 'url(' + this.lipstick2 + ')',
            }"
          ></div>
          <div id="schminken-lipstick3"
            v-bind:style="{
              'background-image': 'url(' + this.lipstick3 + ')',
            }"
          ></div>
          <div id="schminken-lipstick4"
            v-bind:style="{
              'background-image': 'url(' + this.lipstick4 + ')',
            }"
          ></div>
          <div id="schminken-lipstick5"
            v-bind:style="{
              'background-image': 'url(' + this.lipstick5 + ')',
            }"
          ></div>
          <div id="schminken-lipstick6"
            v-bind:style="{
              'background-image': 'url(' + this.lipstick6 + ')',
            }"
          ></div>
          <div class="schminken-avataricon"
            :style="{
              'background-image': 'url(' + this.mikeWillis[this.willis] + ')',
              transition: 'background-image 2s',
              }"
          ></div>
          <div class="schminken-spiegel">
          </div>
          <div id="schminken-milkygood">
          </div>
          <div id="schminken-milkybad">
          </div>
          <div class="schminken-tools" id="schminken-lippenstift" v-on:click="useLippenstift()">
          </div>
          <div class="schminken-tools" id="schminken-anziehen" v-on:click="useAnziehen()">
          </div>
          <div class="schminken-tools" id="schminken-eyeshadow" v-on:click="useEyeshadow()">
          </div>
          <div class="schminken-tools" id="schminken-foundation" v-on:click="useFoundation()">
          </div>
          <div class="schminken-tools" id="schminken-haarnetz" v-on:click="useHaarnetz()">
          </div>
          <div class="schminken-tools" id="schminken-mascara" v-on:click="useMascara()">
          </div>
          <div class="schminken-tools" id="schminken-perucke" v-on:click="usePerucke()">
          </div>
          <WanderwegStange
						class="backstage-wanderweg"
						style="
							left: 2%;
							top: 75%;
							z-index: 10;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	data () {
    	return {
    		speed: 200,
			  usersLoaded: false,
        lippenstift: false,
        anziehen: false,
        eyeshadow: false,
        foundation: false,
        haarnetz: false,
        mascara: false,
        perucke: false,
        lipstick1: '',
        lipstick2: '',
        lipstick3: '',
        lipstick4: '',
        lipstick5: '',
        lipstick6: '',
        lipsFull: 0,
        mikeWillis: [
          '/images/milky/mikewillis.png',
          '/images/milky/mikewillis_netz.png',
          '/images/milky/mikewillis_makeup.png',
          '/images/milky/mikewillis_kleid.png',
          '/images/milky/mikewillis_final.png',
        ],
        willis: 0,
    	}	
  	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
  computed: {
    ...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getHeads: "me/getAvatarAssetsHeads",
      getPopcorn: "inventory/getPopcorn",
		}),
  },
  mounted () {
    for (let sound in this.$sounds) {
		  this.$sounds[sound].stop();
		}
  },
  watch: {
    lipsFull: function () {
      if (this.lipsFull === 6) {
        document.getElementById("schminken-milkybad").style.zIndex = "106";
        this.$sounds.milkybad5.play();
        this.lippenstif = false;
        this.anziehen = false;
        this.eyeshadow = false;
        this.foundation = false;
        this.haarnetz = false;
        this.mascara = false;
        this.perucke = false;
        setTimeout(() => this.lipstick1 = '', 8000);
        setTimeout(() => this.lipstick2 = '', 8000);
        setTimeout(() => this.lipstick3 = '', 8000);
        setTimeout(() => this.lipstick4 = '', 8000);
        setTimeout(() => this.lipstick5 = '', 8000);
        setTimeout(() => this.lipstick6 = '', 8000);
        setTimeout(() => document.getElementById("schminken-milkybad").style.zIndex = "3", 8000);
        setTimeout(() => document.getElementById("schminken-milkybad").style.display = "none", 8000);
        this.lipsFull -= 6;
        this.willis = 0;
      }
    },
  },
  methods: {
    useHaarnetz: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      this.haarnetz = true
      this.$sounds.milkygood1.play();
      document.getElementById("schminken-milkygood").style.display = "initial";
      this.lipstick1 = '';
      this.lipstick2 = '';
      this.lipstick3 = '';
      this.lipstick4 = '';
      this.lipstick5 = '';
      this.lipstick6 = '';
      this.lipsFull = 0;
      this.willis = 1;
    },
    useFoundation: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      if (this.haarnetz == true) {
            this.foundation = true
            document.getElementById("schminken-milkygood").style.display = "initial";
            this.$sounds.milkygood2.play();
            this.lipstick1 = '';
            this.lipstick2 = '';
            this.lipstick3 = '';
            this.lipstick4 = '';
            this.lipstick5 = '';
            this.lipstick6 = '';
            this.lipsFull = 0;
          } else {
            if (this.lipsFull < 5) {
              this.foundation = false
              this.$sounds.milkybad1.play();
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick1 = "/images/milky/lipstick1.gif", 800);
              this.lipsFull ++;
            } else if (this.lipsFull === 5) {
              this.anziehen = false;
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            }
      }
    },
    useEyeshadow: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      if (this.haarnetz == true &&
          this.foundation == true) {
            this.eyeshadow = true
            document.getElementById("schminken-milkygood").style.display = "initial";
            this.$sounds.milkygood4.play();
            this.lipstick1 = '';
            this.lipstick2 = '';
            this.lipstick3 = '';
            this.lipstick4 = '';
            this.lipstick5 = '';
            this.lipstick6 = '';
            this.lipsFull = 0;
          } else {
            if (this.lipsFull < 5) {
              this.eyeshadow = false
              this.$sounds.milkybad2.play();
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick2 = "/images/milky/lipstick2.gif", 800);
              this.lipsFull ++;
            } else if (this.lipsFull === 5) {
              this.anziehen = false;
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            }
      }
    },
    useMascara: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      if (this.haarnetz == true &&
          this.foundation == true &&
          this.eyeshadow == true) {
            this.mascara = true
            document.getElementById("schminken-milkygood").style.display = "initial";
            this.$sounds.milkygood3.play();
            this.lipstick1 = '';
            this.lipstick2 = '';
            this.lipstick3 = '';
            this.lipstick4 = '';
            this.lipstick5 = '';
            this.lipstick6 = '';
            this.lipsFull = 0;
          } else {
            if (this.lipsFull < 5) {
              this.mascara = false
              this.$sounds.milkybad3.play();
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick3 = "/images/milky/lipstick3.gif", 800);
              this.lipsFull ++;
            } else if (this.lipsFull === 5) {
              this.anziehen = false;
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            }
      }
    },
    useLippenstift: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      if (this.haarnetz == true &&
          this.foundation == true &&
          this.eyeshadow == true &&
          this.mascara == true) {
            this.lippenstift = true
            document.getElementById("schminken-milkygood").style.display = "initial";
            this.$sounds.milkygood5.play();
            this.lipstick1 = '';
            this.lipstick2 = '';
            this.lipstick3 = '';
            this.lipstick4 = '';
            this.lipstick5 = '';
            this.lipstick6 = '';
            this.lipsFull = 0;
            this.willis = 2;
          } else {
            if (this.lipsFull < 5) {
              this.lippenstift = false
              this.$sounds.milkybad4.play();
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick4 = "/images/milky/lipstick4.gif", 800);
              this.lipsFull ++;
            } else if (this.lipsFull === 5) {
              this.anziehen = false;
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            }
      }
    },
    useAnziehen: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      if (this.haarnetz == true &&
          this.foundation == true &&
          this.eyeshadow == true &&
          this.mascara == true &&
          this.lippenstift == true) {
            this.anziehen = true
            document.getElementById("schminken-milkygood").style.display = "initial";
            this.$sounds.milkygood1.play();
            this.lipstick1 = '';
            this.lipstick2 = '';
            this.lipstick3 = '';
            this.lipstick4 = '';
            this.lipstick5 = '';
            this.lipstick6 = '';
            this.lipsFull = 0;
            this.willis = 3;
          } else {
            if (this.lipsFull < 5) {
              this.anziehen = false
              this.$sounds.milkybad3.play();
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            } else if (this.lipsFull === 5) {
              this.anziehen = false;
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            }
      }
    },
    usePerucke: function () {
      document.getElementById("schminken-milkygood").style.display = "none";
      document.getElementById("schminken-milkybad").style.display = "none";
      if (this.haarnetz == true &&
          this.foundation == true &&
          this.eyeshadow == true &&
          this.mascara == true &&
          this.lippenstift == true &&
          this.anziehen == true) {
            this.perucke = true
            document.getElementById("schminken-milkygood").style.display = "initial";
            this.$sounds.milkygood6.play();
            this.lipstick1 = '';
            this.lipstick2 = '';
            this.lipstick3 = '';
            this.lipstick4 = '';
            this.lipstick5 = '';
            this.lipstick6 = '';
            this.lipsFull = 0;
            this.willis = 4;
            this.$store.commit("inventory/SET_POPCORN", this.getPopcorn+20)
          } else {
            if (this.lipsFull < 5) {
              this.perucke = false
              this.$sounds.milkybad6.play();
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick6 = "/images/milky/lipstick6.gif", 800);
              this.lipsFull ++;
            } else if (this.lipsFull === 5) {
              this.anziehen = false;
              document.getElementById("schminken-milkybad").style.display = "initial";
              setTimeout(() => this.lipstick5 = "/images/milky/lipstick5.gif", 800);
              this.lipsFull ++;
            }
      }
    },
    instructionGO: function () {
      document.getElementById("schminken-instruction").style.display = "none";
    },
    goBack: function () {
			this.$router.push({ path: "/kulissen/millers/backstage" });
		},
  }
}
</script>

<style lang="scss">

  //animations

  @keyframes schminken-spiegel {
    0% {
        top: -100%;
    }
    100% {
      top: 0;
    }
  }

  @keyframes schminken-spiegelback {
    0% {
        top: -120%;
    }
    100% {
      top: 0;
    }
  }

  @keyframes schminken-inst {
    0% {
        top: -120%;
    }
    100% {
      top: 26%;
    }
  }

  @keyframes schminken-avataricon{
    0% {
        top: -120%;
    }
    100% {
      top: 10%;
    }
  }

  @keyframes schminken-tools {
    0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  //classes container + grid

  .schminken-container {
    position: absolute;
    display: grid;
    grid-template-areas:
    'main'
    'menu';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 150px;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
  }

  .schminken-main {
    position: relative;
    grid-area: main;
    width: 100%;
    height: 100%;
    background-color: black;

    z-index: 0;
  }

  .schminken-menu {
    grid-area: menu;
    width: 100%;
    height: 100%;
    background-color: black;

    z-index: 0;
  }

  //classes main

  #schminken-instruction {
    position: absolute;
    width: 45%;
    height: 35%;
    left: 50%;
    top: 26%;
    transform: translate(-50%, 0);
    background-color: MediumSlateBlue;
    // border: white solid;
    border-radius: 50%;
    filter: drop-shadow(0 0 3rem MediumSlateBlue); 

    animation-name: schminken-inst;
    animation-duration: 8s;
    transition: all 0.2s ease-out;

    z-index: 5;
  }

  .schminken-x {
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

  .schminken-h {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 15%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 3em;
    text-align: center;
  }

  .schminken-t {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 40%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 1.5em;
    text-align: center;
  }

  #schminken-lipstick1 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 100;
    opacity: 0.8;
  }

  #schminken-lipstick2 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 101;
    opacity: 0.8;
  }

  #schminken-lipstick3 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 102;
    opacity: 0.8;
  }

  #schminken-lipstick4 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 103;
    opacity: 0.8;
  }

  #schminken-lipstick5 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 104;
    opacity: 0.8;
  }

  #schminken-lipstick6 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 105;
    opacity: 0.8;
  }

  .schminken-spiegelback {
    position: absolute;
    width: 80%;
    height: 120%;
    left: 15%;
    top: 0;
	  transform: scale(1);
    background: rgb(170,170,170);
    background: linear-gradient(90deg, rgba(170,170,170,1) 0%, rgba(255,255,255,1) 24%, rgba(170,170,170,1) 46%, rgba(255,255,255,1) 72%, rgba(170,170,170,1) 79%, rgba(246,246,246,1) 89%, rgba(170,170,170,1) 100%);

    animation-name: schminken-spiegelback;
    animation-duration: 6s;
    transition: all 0.2s ease-out;

    z-index: 0;
  }

  .schminken-avataricon {
	  position: absolute;
    width: 30%;
    height: 100%;
    left: 35%;
    top: 10%;
	  transform: scale(1);
    background-size: 100% auto;
    background-repeat: no-repeat;

    animation-name: schminken-avataricon;
    animation-duration: 6s;
    transition: background-image 0.2s ease-in-out;

    z-index: 1;
}

  .schminken-spiegel {
    position: absolute;
    width: 100%;
    height: 110%;
    left: 0;
    top: 0;
    background-image: url('~static/images/objects/backstage_spiegel.png');
    background-size: 100% 100%;

    animation-name: schminken-spiegel;
    animation-duration: 4s;

    z-index: 2;
  }

  #schminken-milkygood {
    display: none;
    position: absolute;
    width: 30%;
    height: 40%;
    left: 65%;
    top: 5%;
    transform: scale(1);
    background-image: url('~static/images/milky/face_positive.png');
    background-size: auto 100%;
    background-repeat: no-repeat;

    transition: all 1s ease-out;

    z-index: 3;
  }

  #schminken-milkybad {
    display: none;
    position: absolute;
    width: 30%;
    height: 40%;
    left: 5%;
    top: 5%;
    transform: scale(1);
    background-image: url('~static/images/milky/face_negative.png');
    background-size: auto 100%;
    background-repeat: no-repeat;

    transition: all 1s ease-out;

    z-index: 3;
  }

  .schminken-tools {
    position: absolute;
    width: 10%;
    height: 15%;
    transform: scale(1);

    animation-name: schminken-tools;
    animation-duration: 8s;
    transition: all 0.2s ease-out;
  }

  .schminken-tools:hover {
    transform: scale(1.3);
    transition: all 0.2s ease-out;
  }

  #schminken-lippenstift {
    left: 20%;
    top: 85%;
    background-image: url('~static/images/milky/lippenstift.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }

  #schminken-anziehen {
    left: 30%;
    top: 85%;
    background-image: url('~static/images/milky/anziehen.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }

  #schminken-eyeshadow {
    left: 40%;
    top: 85%;
    background-image: url('~static/images/milky/eyeshadow.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }

  #schminken-foundation {
    left: 50%;
    top: 85%;
    background-image: url('~static/images/milky/foundation.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }
  
  #schminken-haarnetz {
    left: 60%;
    top: 85%;
    background-image: url('~static/images/milky/haarnetz.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }

  #schminken-mascara {
    left: 70%;
    top: 85%;
    background-image: url('~static/images/milky/mascara.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }

  #schminken-perucke {
    left: 80%;
    top: 85%;
    background-image: url('~static/images/milky/perucke.png');
    background-size: 100% 100%;
    
    z-index: 3;
  }

  .schminken-back {
    position: fixed;
    width: 8%;
    height: 10%;
    left: 2%;
    top: 70%;
    background-color: green;
    transform: scale(1);
    clip-path: polygon(50% 0%, 50% 20%, 100% 20%, 100% 80%, 50% 80%, 50% 100%, 0% 50%);

    animation-name: schminken-tools;
    animation-duration: 8s;
    transition: all 0.2s ease-out;

    z-index: 10;
  }

  .schminken-back:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-out;
  }

  .schminken-back p {
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -60%);
    font-size: 1.3em;
    text-align: center;
  }

  .schminken-avatar {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(0.1);

    z-index: 3;
  }

  .schminken-avatar-s {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(0.1);

    z-index: 3;
  }
</style>