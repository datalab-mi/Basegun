<template>
  <div>
  <HeaderNoMenu />
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <img src="../assets/basegun_green.png" alt="" class="swiper-logo">
      <div class="swiper-content">
        <ul class="swiper-ul fr-text--md">
          <li class="swiper-li">Basegun est une application <span class="swiper-green-highlight">prototype</span>, en cours de développement par le Ministère de l’Intérieur.</li>
          <li class="swiper-li">A ce jour, Basegun <span class="swiper-green-highlight">ne prend pas encore en compte</span> l'identification des <span class="swiper-green-highlight">armes non létales</span> (factices, à air comprimé, à blanc ou neutralisées).</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/basegun_red.png" alt="" class="swiper-logo">
      <div class="swiper-content">
        <ul class="swiper-ul fr-text--md">
          <li class="swiper-li">Une arme doit toujours être <span class="swiper-red-highlight">considérée comme chargée</span>.</li>
          <li class="swiper-li">Une arme ne doit <span class="swiper-red-highlight">jamais être dirigée</span> vers quelqu’un.</li>
          <li class="swiper-li">Avant de manipuler une arme, toujours s’assurer qu’elle est <span class="swiper-red-highlight">mise en sécurité.</span></li>
          <li class="swiper-li">Veiller à la préservation des <span class="swiper-red-highlight">traces et indices</span> éventuels lors des manipulations de sécurité.</li>          
        </ul>
        <button class="fr-btn fr-btn--sm" id="position-button" @click="redirectToStart">
          J'ai compris
        </button>
      </div>
    </swiper-slide>

  </swiper>
  </div>
</template>

<script>

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  // import Swiper required modules
  import { Navigation } from "swiper";

  import HeaderNoMenu from '@/components/HeaderNoMenu.vue';

  export default {
    name: 'OnboardingSwiper',
    components: {
      Swiper,
      SwiperSlide,
      HeaderNoMenu
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
    methods: {
      redirectToStart() {
          window.location.replace("/accueil")
      }
    }
  };
</script>

<style>

  .swiper {
    width: 100%;
    height: 100%;
    position: static;
  }

  .swiper-slide {
    background: #fff;
  }

  .swiper-logo {
    display: block;
    margin: 0 auto;
  }

  .swiper-content {
    width: 75%;
    margin: 0 auto;
    text-align: center;
  }

  .swiper-ul {
    list-style-position: inside;
    text-indent: -1em;
    padding-left: 1em;
    display: inline-block;
    text-align: left;
    max-width: 700px;
    margin-bottom: 12px !important;
  }

  .swiper-li {
    margin-bottom: 4px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #000091;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 28px;
  }

  .swiper-button-disabled {
    display: none;
  }

  .swiper-red-highlight {
    font-weight: bold;
    color: #FF0000;
  }

  .swiper-green-highlight {
    font-weight: bold;
    color: #00C7C8;
  }

  #position-button {
    display: block;
    margin: 0 auto;
  }

</style>