<template>
  <section
    :data-background-image="backgroundImageUrl"
    data-background-size="cover"
  >
    <div class="custom-title">
      <h1>{{ title }}</h1>
    </div>
    <slot></slot>
    <div class="card-number recto">
      <p>{{ cardNumber }}</p>
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
.custom-title {
  position: absolute;
  top: 3vh;
  left: 0vw;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding-block: 3vh;
}

.recto {
  bottom: 3vh;
}
</style>
