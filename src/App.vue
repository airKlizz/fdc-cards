<template>
  <div v-co2-subscript id="app" class="reveal">
    <div class="slides">
      <CardComplete :title="$t('V1C1L1')" :background-image="'card1.png'" :content="$t('V1C1L2')" :card-number="1"
        :lot-number="1" />
      <CardComplete :title="$t('V1C5L1')" :background-image="'card2.png'" :content="$t('V1C5L2')" :card-number="5"
        :lot-number="1">
        <div class="graph-container">
          <div class="graph-caption">
            <p class="vertical-text graph-text">{{ $t('V1C5L4') }}</p>
          </div>
          <div class="graph-content">
            <img class="graph-image" src="@/assets/card2_total_graph.png" alt="graph">
            <p class="graph-title graph-text">{{ $t('V1C5L5') }}</p>
            <p class="graph-label-1">{{ $t('V1C5L3') }}</p>
          </div>
          <div class="graph-caption">
            <p class="vertical-text graph-text">{{ $t('V1C999L90') }}</p>
          </div>

        </div>
      </CardComplete>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";

import CardComplete from "@/components/CardComplete.vue";

export default {
  name: "App",
  components: {
    CardComplete,
  },
  mounted() {
    Reveal.initialize({
      controls: false,
      progress: false,
      disableLayout: true,
      transition: "none",
      transitionSpeed: "fast",
      backgroundTransition: "none",
      margin: 0,
    });
  },
};
</script>

<style>
:root {
  --r-main-font: Arial, sans-serif;
  --r-heading-font: var(--r-main-font);
  --r-heading-color: white;
  --r-heading1-size: 80px;
  --r-block-margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

.slides>section {
  width: 100%;
  height: 100%;
}

.container {
  align-items: center;
}

.graph-container {
  --offset: 23.7%;

  position: relative;
  width: 85vw;
  transform: translateY(calc(-1 * var(--offset)));

  background-image: linear-gradient(#ffffff00, #ffffff00), linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
  background-size: 100% calc(100% - var(--offset));
  background-position: top left, bottom left;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 10% 80% 10%;

}

.graph-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.graph-image {
  width: 100%;
  max-width: 100% !important;
}

.graph-title {
  position: absolute;
  text-align: center;
  width: 30%;
  left: 20%;
  top: calc(3% + var(--offset));
}

.graph-label-1 {
  position: absolute;
  text-align: center;
  left: 27%;
  top: calc(24% + var(--offset));
  background-color: white;
  border: 3px solid black;
  padding-block: 4px;
  padding-inline: 14px;
  font-weight: bold;
  font-size: 16px;
}

.graph-caption {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  height: calc(100% - var(--offset));
  width: 100%;
}

.graph-text {
  font-size: 20px;
}

.vertical-text {
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
}
</style>
