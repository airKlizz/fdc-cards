<template>
  <section :data-background-image="backgroundImageUrl" data-background-size="cover">
    <div class="container">
      <div class="custom-title">
        <h1>{{ title }}</h1>
      </div>
      <slot></slot>
      <div class="card-number recto">
        <p>{{ cardNumber }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CartRecto",
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    backgroundImageUrl() {
      return require("@/assets/" + this.backgroundImage);
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3vh;
}

.custom-title {
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding-block: 3vh;
  z-index: 999;
}

.recto {
  bottom: 3vh;
}
</style>
