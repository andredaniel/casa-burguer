<template>
  <Layout class="app">
    <div class="container">
      <g-image src="~/assets/images/logo-jack-burguer.svg" class="brand" />

      <h2>Lanches</h2>
      <Products :category="1" />

      <h2>BEBIDAS</h2>
      <Products :category="2" />

      <footer>
        <a href="https://www.instagram.com/jackburgueritabira/" target="_blank">
          <i class="bi bi-instagram"></i><br />
          Instagram
        </a>
      </footer>
    </div>

    <Cart />
  </Layout>
</template>

<script>
import Products from "../components/Products";
import Cart from "../components/Cart";

export default {
  metaInfo: {
    title: "Cardápio",
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

.container {
  max-width: 600px;
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
  letter-spacing: 5px;
  margin-bottom: 0;
  margin-top: 40px;
  opacity: 0.7;
  text-align: center;
  text-transform: uppercase;
}

footer {
  padding: 40px 0 60px;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
    opacity: 0.7;

    &:hover {
      opacity: 0.9;
    }

    i {
      font-size: 24px;
    }
  }
}
</style>
