const base = {
  quantity: 0,
  showDetails: false
};

export default {
  state: {
    products: [
      {
        category: 3,
        ...base,
        description:
          "Pic Burguer + Fritas + Coca-cola mini 200ml",
        name: "Combo Pic Burguer",
        price: 33,
        src: "pic-burguer.jpeg"
      },
      {
        category: 3,
        ...base,
        description:
          "Jack Burguer + Fritas + Coca-cola mini 200ml",
        name: "Combo Jack Burguer",
        price: 33,
        src: "jack-burguer.jpeg"
      },
      {
        category: 3,
        ...base,
        description:
          "Onion Burguer + Fritas + Coca-cola mini 200ml",
        name: "Combo Onion Burguer",
        price: 33,
        src: "onion-burguer.jpeg"
      },
      {
        category: 3,
        ...base,
        description:
          "Banana Burguer + Fritas + Coca-cola mini 200ml",
        name: "Combo Banana Burguer",
        price: 33,
        src: "banana-burguer.jpeg"
      },
      {
        category: 3,
        ...base,
        description:
          "Smash Burguer + Fritas + Coca-cola mini 200ml",
        name: "Combo Smash Burguer",
        price: 33,
        src: "smash-burguer.jpeg"
      },
      {
        category: 3,
        ...base,
        description:
          "Cheddar Burguer + Fritas + Coca-cola mini 200ml",
        name: "Combo Cheddar Burguer",
        price: 33,
        src: "cheddar-burguer.png"
      },
      // {
      //   category: 3,
      //   ...base,
      //   description:
      //     "Double Smash Burguer + Fritas + Coca-cola mini 200ml",
      //   name: "Combo Double Smash Burguer",
      //   price: 28,
      //   src: "double-smash.jpeg"
      // },
      {
        category: 1,
        ...base,
        description:
          "Pão de brioche, Bife Artesanal 160g, Creme Cheddar, Picles, Molho especial Jack",
        name: "Pic Burguer",
        price: 25,
        src: "pic-burguer.jpeg"
      },
      {
        category: 1,
        ...base,
        description:
          "Pão de brioche, Bife Artesanal 160g, Creme de catupiry, Bacon, Molho Especial Jack",
        name: "Jack Burguer",
        price: 25,
        src: "jack-burguer.jpeg"
      },
      {
        category: 1,
        ...base,
        description:
          "Pão de Brioche, Bife Artesanal 160g, Cebola roxa, Bacon em fatias, Creme de cheddar, Molho Especial Jack",
        name: "Onion Burguer",
        price: 28,
        src: "onion-burguer.jpeg"
      },
      {
        category: 1,
        ...base,
        description:
          "Pão de Brioche, Bife Artesanal 160g, Bacon em fatias, Banana Caramelizada, Creme de Catupiry",
        name: "Banana Burguer",
        price: 25,
        src: "banana-burguer.jpeg"
      },
      {
        category: 1,
        ...base,
        description:
          "Pão de Brioche, Bife Artesanal Smash, creme de cheddar, molho Especial Jack",
        name: "Smash Burguer",
        price: 19,
        src: "smash-burguer.jpeg"
      },
      {
        category: 1,
        ...base,
        description:
          "Pão de brioche, Bife Artesanal 160g, Creme de cheddar, Bacon, Molho Especial Jack",
        name: "Cheddar Burguer",
        price: 25,
        src: "cheddar-burguer.png"
      },
      {
        category: 1,
        ...base,
        description:
          "Pão de Brioche, Bife Duplo Artesanal Smash, creme de cheddar, molho Especial Jack",
        name: "Double Smash",
        price: 25,
        src: "double-smash.jpeg"
      },
      {
        ...base,
        category: 1,
        description:
          "140g de deliciocas batatas fritas e crocantes ao estilo Jack.",
        name: "Jack Fries",
        price: 6,
        src: "jack-fries.jpeg"
      },
      {
        ...base,
        category: 2,
        description: "Refrigerante de 600ml",
        name: "Coca-Cola - 600ml",
        price: 7.5,
        src: "coca-cola.jpeg"
      },
      {
        ...base,
        category: 2,
        description: "Refrigerante de 350ml",
        name: "Coca-Cola Lata - 350ml",
        price: 5,
        src: "coca-cola-lata.jpeg"
      },
      {
        ...base,
        category: 2,
        description: "Refrigerante de 600ml",
        name: "Guaraná Antarctica - 600ml",
        price: 6.5,
        src: "guarana-antarctica.webp"
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
    decreaseQuantity(_state, product) {
      if (product.quantity === 0) {
        return;
      }

      product.quantity = product.quantity - 1;
    },
    increaseQuantity(_state, product) {
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
