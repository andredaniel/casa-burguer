<template>
  <div class="product-quantity">
    <button class="button minus" @click.stop="$store.commit('decreaseQuantity', product)">-</button>
    <div class="quantity">{{ product.quantity }}</div>
    <button class="button plus" @click.stop="$store.commit('increaseQuantity', product)">+</button>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style lang="scss" scoped>
.product-quantity {
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  bottom: 20px;
  display: grid;
  font-size: 20px;
  grid-template-columns: auto 1fr auto;
  left: 50%;
  padding: 10px;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  z-index: 10;
}

.quantity {
  padding: 0 25px;
}

.button {
  background-color: #ddd;
  border-radius: 50px;
  border: none;
  display: flex;
  height: 40px;
  justify-content: space-around;
  width: 40px;

  &:focus {
    outline: none;
  }
}
</style>
