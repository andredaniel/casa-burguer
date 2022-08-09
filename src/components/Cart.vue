<template>
  <div class="cart-wrapper">
    <div
      @click="reviewOrder = false"
      :class="{ active: reviewOrder }"
      class="cart-overlay"
    ></div>
    <div
      :class="{
        active: cartQuantity > 0,
        reviewOrder: reviewOrder,
      }"
      class="cart-content"
    >
      <div :class="{ active: reviewOrder }" class="products">
        <h2>Resumo do seu pedido</h2>
        <ul class="list-group mb-3">
          <li
            class="
              list-group-item
              d-flex
              align-items-center
              justify-content-between
            "
            v-for="product in $store.state.products.filter(
              (product) => product.quantity > 0
            )"
            :key="product.id"
          >
            <span>{{ product.quantity }}x {{ product.name }}</span>
            <span>
              {{
                (product.quantity * product.price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}</span
            >
          </li>
          <li
            v-if="this.$store.state.deliveryFee"
            class="
              list-group-item
              d-flex
              align-items-center
              justify-content-between
              text-primary
            "
          >
            <span>Taxa de entrega</span>
            <span>
              {{
                this.$store.state.deliveryFee.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}</span
            >
          </li>
        </ul>

        <h2>Forma de pagamento</h2>
        <div class="form-group">
          <select
            v-model="paymentMethod"
            class="form-select"
            style="margin-bottom: 5px"
          >
            <option value selected disabled>Selecione...</option>
            <option value="pix">PIX</option>
            <option value="card">Cartão</option>
            <option value="money">Dinheiro</option>
          </select>
        </div>

        <div v-if="$store.state.paymentMethod === 'pix'" class="text-primary">
          Chave PIX: <span>brunorochaepc@gmail.com</span>
        </div>

        <div class="form-group" v-if="$store.state.paymentMethod === 'money'">
          <label for>Se precisa de troco, digite o valor abaixo.</label>
          <input type="number" class="form-control" v-model="paymentChange" />
        </div>

        <h2>Endereço</h2>
        <user-address />
      </div>
      <button @click="reviewOrder = !reviewOrder" class="cart-resume">
        <div class="resume">
          <strong>{{
            cartTotal.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}</strong>
          <div>{{ cartQuantity }} itens no carrinho</div>
        </div>
        <button class="btn btn-outline-secondary" v-if="!reviewOrder">
          Ver pedido
        </button>
        <button
          class="btn btn-success"
          @click.stop="finishOrder"
          v-if="reviewOrder"
          :disabled="
            !(
              $store.state.paymentMethod &&
              $store.state.address.cep &&
              $store.state.address.numero
            )
          "
        >
          Enviar pedido
        </button>
      </button>
    </div>
  </div>
</template>

<script>
import UserAddress from "./UserAddress";

export default {
  components: {
    UserAddress,
  },
  data() {
    return {
      reviewOrder: false,
    };
  },
  computed: {
    paymentMethod: {
      get() {
        return this.$store.state.paymentMethod;
      },
      set(value) {
        this.$store.commit("updatePaymentMethod", value);
      },
    },
    paymentChange: {
      get() {
        return this.$store.state.paymentChange;
      },
      set(value) {
        this.$store.commit("updatePaymentChange", value);
      },
    },
    cartQuantity() {
      return this.$store.state.products.reduce(
        (acc, product) => acc + (product.quantity || 0),
        0
      );
    },
    cartTotal() {
      return (
        this.$store.state.products.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        ) + this.$store.state.deliveryFee
      );
    },
  },
  methods: {
    finishOrder() {
      const phoneNumber = 553171093627;
      let order = "*Olá! Este é o meu pedido:*\n\n";

      order =
        order +
        this.$store.state.products
          .filter((product) => product.quantity > 0)
          .reduce(
            (acc, product) =>
              acc +
              `${product.category === 1 ? "🍔" : "🥤"} ${product.quantity} ${
                product.name
              }\n`,
            ""
          );

      const address = this.$store.state.address;

      order = `${order}\n🗺 *Meu endereço é:*\n`;
      order = `${order}${address.logradouro}, ${address.numero} ${
        address.complemento ? "- " + address.complemento : ""
      } - ${address.bairro}\n\n`;

      if (this.$store.state.paymentMethod === "pix") {
        order = `${order}🤑 Vou pagar com PIX`;
      } else if (this.$store.state.paymentMethod === "card") {
        order = `${order}💳 Vou pagar com cartão`;
      } else {
        order = `${order}💵 Vou pagar em dinheiro`;
        if (this.$store.state.paymentChange) {
          order = `${order} e preciso de troco para R$ ${this.$store.state.paymentChange}`;
        }
      }

      if (process.isClient) {
        let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          order
        )}`;
        const win = window.open(url, "_blank");
        win.focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$transition: cubic-bezier(0.8, -0.2, 0.2, 1.2);

h2 {
  border-bottom: 1px solid #ccc;
  color: #000;
  font-size: 18px;
  letter-spacing: 2px;
  margin: 25px 0;
  opacity: 0.7;
  padding-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
}

.cart-overlay {
  background-color: rgba(black, 0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 600ms cubic-bezier(0.8, -0.1, 0.2, 1.1);
  z-index: 98;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
}

.cart-content {
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  bottom: 0;
  left: 0;
  max-height: 60px;
  overflow: hidden;
  padding: 15px;
  position: fixed;
  right: 0;
  transform: translateY(100%);
  transition: all 600ms $transition;
  z-index: 99;

  &:after {
    background-color: #ccc;
    border-radius: 10px;
    content: "";
    height: 5px;
    left: 50%;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: translateX(-50%);
    transition: opacity 600ms $transition;
    width: 30px;
  }

  &.active {
    transform: translateY(0);
  }

  .products {
    padding-bottom: 60px;
    transition: max-height 600ms $transition;
    overflow-y: scroll;
    height: 90vh;
  }

  .cart-resume {
    align-items: center;
    background-color: white;
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-top: 1px solid transparent;
    bottom: 0;
    display: flex;
    height: 60px;
    justify-content: space-between;
    left: 0;
    padding: 0 20px;
    position: absolute;
    text-align: left;
    transition: all 600ms $transition;
    width: 100%;
    z-index: 2;

    &:focus {
      outline: none;
    }
  }

  &.reviewOrder {
    max-height: 100vh;

    &:after {
      opacity: 1;
    }

    .cart-resume {
      border-top: 1px solid #eee;
    }
  }
}

.resume {
  line-height: 1em;
  font-size: 15px;
}
</style>
