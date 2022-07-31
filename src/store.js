export default {
  state: {
    products: [
      {
        id: 1,
        category: 1,
        description:
          "140g de bife de acém, creme de catupiry, bacon em cubos, tomate, molho barbecue e porção de batata.",
        name: "Jack Burguer",
        price: 18,
        quantity: 0,
        showDetails: false,
        src: "jack-burguer.png"
      },
      {
        id: 2,
        category: 1,
        description:
          "140g de bife de acém, creme de cheddar, bacon em cubos, tomate, molho barbecue e porção de batata.",
        name: "Cheddar Burguer",
        price: 18,
        quantity: 0,
        showDetails: false,
        src: "cheddar-burguer.png"
      },
      {
        id: 3,
        category: 1,
        description:
          "140g de bife de acém, fatias de banana, bacon em cubos, tomate, molho barbecue e porção de batata.",
        name: "Banana Burguer",
        price: 18,
        quantity: 0,
        showDetails: false,
        src: "banana-burguer.png"
      },
      {
        id: 4,
        category: 2,
        description: "Refrigerante de 1,5L",
        name: "Coca-Cola - 1,5L",
        price: 8,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 5,
        category: 2,
        description: "Refrigerante de 1,5L",
        name: "Guaraná Antarctica - 1,5L",
        price: 8,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 6,
        category: 2,
        description: "Refrigerante de 350ml",
        name: "Coca-Cola Lata - 350ml",
        price: 4,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 7,
        category: 2,
        description: "Refrigerante de 350ml",
        name: "Guaraná Antarctica Lata - 350ml",
        price: 4,
        quantity: 0,
        showDetails: false,
        src: null
      }
    ],
    address: {
      numero: "",
      complemento: ""
    },
    paymentMethod: null,
    paymentChange: null,
    deliveryFee: 7
  },
  mutations: {
    decreaseQuantity(state, product) {
      if (product.quantity === 0) {
        return;
      }

      product.quantity = product.quantity - 1;
    },
    increaseQuantity(state, product) {
      product.quantity = product.quantity + 1;
    },
    updatePaymentMethod(state, data) {
      state.paymentMethod = data;
    },
    updatePaymentChange(state, data) {
      state.paymentChange = data;
    },
    updateAddress(state, data) {
      const newAddress = JSON.parse(JSON.stringify(state.address));

      Object.keys(data).map(key => {
        newAddress[key] = data[key];
      });

      state.address = newAddress;
    }
  }
};
