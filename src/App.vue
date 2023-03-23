<template>
  <div id="app" class="reveal">
    <div class="slides">
      <CardComplete
        :title="$t('card1.title')"
        :background-image="'card1.png'"
        :content="$t('card1.content')"
        :card-number="1"
        :lot-number="1"
      />
      <CardComplete
        title="Énergies fossiles"
        :background-image="'card2.png'"
        content="Les énergies fossiles sont le charbon, le pétrole et le gaz. Elles sont utilisées principalement dans les bâtiments, le transport et dans l'industrie. Elles émettent du CO2 lors de la combustion."
        :card-number="2"
        :lot-number="1"
      >
        <div>
          <p>{{ $t("card1.title") }}</p>
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
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

.slides > section {
  width: 100%;
  height: 100%;
}
</style>
