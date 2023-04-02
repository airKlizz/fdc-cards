<template>
  <CardRecto :background-image="backgroundImage" :title="title" :card-number="cardNumber">
    <slot></slot>
  </CardRecto>
  <CardVerso :content="content" :card-number="cardNumber" :lot-number="lotNumber" />
</template>

<script>
import CardRecto from "./CardRecto.vue";
import CardVerso from "./CardVerso.vue";

export default {
  name: "CardComplete",
  components: {
    CardRecto,
    CardVerso,
  },
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
    content: {
      type: String,
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
.card-number {
  position: absolute;
  left: 3vh;
  background-image: url("~@/assets/cards.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 18vh;
  width: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 80px;
}
</style>
