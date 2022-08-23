<template>
  <div class="products-wrapper">
    <div class="product-slider" v-bind="settings">
      <div
        class="product"
        @click="product.showDetails = !product.showDetails"
        v-for="(product, key) in $store.state.products.filter(
          (product) => product.category === category
        )"
        :key="key"
      >
        <div class="product-wrapper">
          <div v-if="product.src" :class="product.category === 3 ? 'image-wrapper' : ''">
            <g-image
              :src="require('!!assets-loader?!~/assets/images/' + product.src)"
              class="img-fluid"
            />
            <g-image
              :src="require('!!assets-loader?!~/assets/images/jack-fries.jpeg')"
              v-if="product.category === 3"
              class="img-fluid"
            />
            <g-image
              :src="require('!!assets-loader?!~/assets/images/coca-mini-200ml.jpeg')"
              v-if="product.category === 3"
              class="img-fluid"
            />
          </div>
          <div v-else class="card text-center">
            <div class="card-header">{{ product.name }}</div>
            <div class="card-body pb-5 mb-5">
              <div>{{ product.description }}</div>
              <div class="price">
                {{
                  (weekDay == 3 ? product.price - 5 : product.price).toLocaleString("pt-br", {
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
              <strong>{{ product.name }}</strong>
              <p>{{ product.description }}</p>
              <hr />
              <div class="price">
                {{
                  (weekDay == 3 ? product.price - 5 : product.price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
              </div>
            </div>
          </div>
          <product-quantity :product="product" />
        </div>
        <div class="product-details">
          <div class="product-grid">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">
              {{
                (weekDay == 3 ? product.price - 5 : product.price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </div>
          </div>
          <div class="product-description">{{ product.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {format} from 'date-fns';
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
      weekDay: format(new Date(), 'e'),
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
    margin-bottom: 50px;

    .product-wrapper {
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    .product-details {
      color: white;
      padding-top: 20px;

      .product-grid {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;
      }

      .product-name {
        font-weight: bold;
        text-transform: uppercase;
      }

      .product-description {
        opacity: 0.7;
        margin: 10px 0;
      }

      .product-price {
        font-weight: bold;
      }
    }

    img {
      min-height: 350px;
      object-fit: cover;
      width: 100%;
    }

    .image-wrapper {
      display: flex;

      img {
        width: 25%;
        min-height: 200px;
      }

      img:first-child {
        width: 50%;
      }
    }

    .description {
      align-items: center;
      background-color: rgba(white, 0.8);
      bottom: 0;
      display: flex;
      font-size: 17px;
      font-weight: bold;
      left: 0;
      padding: 25px 25px 75px 25px;
      position: absolute;
      right: 0;
      text-align: center;
      top: 0;

      div {
        width: 100%;
      }

      strong {
        display: block;
        margin-bottom: 10px;
      }

      p {
        font-weight: normal;
      }
    }
  }
}
</style>
