export default {
  state: {
    products: [
      {
        id: 1,
        category: 1,
        description:
          "Pão de brioche, Bife Artesanal 160g, Creme Cheddar, Picles, Molho especial Jack",
        name: "Pic Burguer",
        price: 25,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 2,
        category: 1,
        description:
          "Pão de brioche, Bife Artesanal 160g, Creme de catupiry, Bacon, Molho Especial Jack",
        name: "Jack Burguer",
        price: 25,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 3,
        category: 1,
        description:
          "Pão de brioche, Bife Artesanal 160g, Creme de cheddar, Bacon, Molho Especial Jack",
        name: "Cheddar Burguer",
        price: 25,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 4,
        category: 1,
        description:
          "Pão de Brioche, Bife Artesanal 160g, Cebola roxa, Bacon em fatias, Creme de cheddar, Molho Especial Jack",
        name: "Onion Burguer",
        price: 28,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 5,
        category: 1,
        description:
          "Pão de Brioche, Bife Artesanal 160g, Bacon em fatias, Banana Caramelizada, Creme de Catupiry",
        name: "Banana Burguer",
        price: 25,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 6,
        category: 2,
        description: "Refrigerante de 600ml",
        name: "Coca-Cola - 600ml",
        price: 7.5,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 8,
        category: 2,
        description: "Refrigerante de 350ml",
        name: "Coca-Cola Lata - 350ml",
        price: 5,
        quantity: 0,
        showDetails: false,
        src: null
      },
      {
        id: 7,
        category: 2,
        description: "Refrigerante de 600ml",
        name: "Guaraná Antarctica - 600ml",
        price: 6.5,
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
