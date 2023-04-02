<template>
  <section :data-background-image="backgroundImageUrl" data-background-size="cover">
    <div class="card-number verso">
      <p>{{ cardNumber }}</p>
    </div>
    <div class="logo"></div>
    <div class="content">
      <p>{{ content }}</p>
    </div>
    <div class="lot">
      <p>Lot {{ lotNumber }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardVerso",
  props: {
    content: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
    lotNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.verso {
  top: 2vh;
}

.logo {
  position: absolute;
  top: 3vh;
  right: 3vh;
  background-image: url("~@/assets/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 18vh;
  width: 36vh;
}

.content {
  --padding-value: 10vw;

  height: 100%;
  width: calc(100% - calc(2 * var(--padding-value)));
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: var(--padding-value);
}

.lot {
  position: absolute;
  bottom: 0vh;
  left: 3vh;
  height: 18vh;
  width: 24vh;
  display: flex;
  justify-content: center;
  background-color: #e30613;
  color: white;
}
</style>
