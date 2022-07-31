<template>
  <Layout class="app">
    <div class="container">
      <g-image src="~/assets/images/logo-jack-burguer.svg" class="brand" />

      <h2>Lanches</h2>
      <Products :category="1" />

      <h2>BEBIDAS</h2>
      <Products :category="2" />
    </div>

    <Cart />
  </Layout>
</template>

<script>
import Products from "../components/Products";
import Cart from "../components/Cart";

export default {
  metaInfo: {
    title: "Jack Burguer",
  },
  components: {
    Products,
    Cart,
  },
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #43006a;
  min-height: 100vh;
  padding: 20px 0 60px;
}

.brand {
  display: block;
  height: auto;
  margin: 30px auto 0;
  width: 200px;
}

h2 {
  color: #fff;
  font-size: 20px;
  letter-spacing: 20px;
  margin-bottom: 0;
  margin-top: 40px;
  opacity: 0.7;
  text-align: center;
  text-transform: uppercase;
}
</style>
