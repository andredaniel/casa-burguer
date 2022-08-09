<template>
  <div class="products-wrapper">
    <div class="product-slider" v-bind="settings">
      <div
        class="product"
        @click="product.showDetails = !product.showDetails"
        v-for="product in $store.state.products.filter(
          (product) => product.category === category
        )"
        :key="product.id"
      >
        <g-image
          v-if="product.src"
          :src="require('!!assets-loader?!~/assets/images/' + product.src)"
          class="img-fluid"
        />
        <div v-else class="card text-center">
          <div class="card-header">{{ product.name }}</div>
          <div class="card-body pb-5 mb-5">
            <div>{{ product.description }}</div>
            <div class="price">
              {{
                product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </div>
          </div>
        </div>
        <div
          class="description"
          v-if="product.description && product.showDetails && product.src"
        >
          <div>
            {{ product.description }}
            <hr />
            <div class="price">
              {{
                product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </div>
          </div>
        </div>
        <product-quantity :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ProductQuantity from "../components/ProductQuantity";

export default {
  props: ["category"],
  components: {
    VueSlickCarousel,
    ProductQuantity,
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style lang="scss">
.products-wrapper {
  margin-top: 30px;
  position: relative;
}

.price {
  font-weight: bold;
}

.product-slider {
  .product {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;

    img {
      min-height: 350px;
      object-fit: cover;
    }

    .description {
      align-items: center;
      background-color: rgba(white, 0.8);
      bottom: 0;
      display: flex;
      font-size: 17px;
      font-weight: bold;
      left: 0;
      padding: 25px;
      position: absolute;
      right: 0;
      text-align: center;
      top: 0;
    }
  }
}
</style>
