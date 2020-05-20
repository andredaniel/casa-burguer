<template>
  <div class="row">
    <div class="form-group col-5">
      <label for="cep">CEP</label>
      <input class="form-control" type="text" v-model="cep" />
    </div>

    <div class="form-group col-7">
      <label for="rua">Endereço</label>
      <input class="form-control" type="text" v-model="logradouro" />
    </div>

    <div class="form-group col-3">
      <label for="numero">Número</label>
      <input class="form-control" type="text" v-model="numero" />
    </div>

    <div class="form-group col">
      <label for="complemento">Complemento</label>
      <input class="form-control" type="text" v-model="complemento" />
    </div>

    <div class="form-group col">
      <label for="bairro">Bairro</label>
      <input class="form-control" type="text" v-model="bairro" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cep: ""
    };
  },
  watch: {
    cep() {
      this.buscaCep();
    }
  },
  computed: {
    logradouro: {
      get() {
        return this.$store.state.address.logradouro;
      },
      set(value) {
        this.$store.commit("updateAddress", { logradouro: value });
      }
    },
    numero: {
      get() {
        return this.$store.state.address.numero;
      },
      set(value) {
        this.$store.commit("updateAddress", { numero: value });
      }
    },
    complemento: {
      get() {
        return this.$store.state.address.complemento;
      },
      set(value) {
        this.$store.commit("updateAddress", { complemento: value });
      }
    },
    bairro: {
      get() {
        return this.$store.state.address.bairro;
      },
      set(value) {
        this.$store.commit("updateAddress", { bairro: value });
      }
    }
  },
  methods: {
    buscaCep() {
      const cep = this.cep.replace(/\D/g, "");

      if (cep.length !== 8) {
        return;
      }

      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({ data }) => {
          if (data.localidade !== "Itabira") {
            return alert("Desculpe! Atendemos apenas na cidade de Itabira");
          }

          this.$store.commit("updateAddress", data);

          const params = {
            origins: `${data.logradouro} ${data.bairro} ${data.localidade}`,
            destinations: `Rua São Manoel, Água Fresca, Itabira`,
            mode: "driving",
            language: "pt-BR",
          };

          const queryString = encodeURI(
            Object.keys(params)
              .map(key => key + "=" + params[key])
              .join("&")
          );

          // const mapsApi = `https://maps.googleapis.com/maps/api/distancematrix/json?${queryString}`;

          axios
            .get(
              `https://casaburguer.estoqueintegrado.com.br/distance?${queryString}`
            )
            .then(({ data }) => {
              const distance = data.rows[0].elements[0].distance.value;
              const deliveryFee = Math.round(distance * 0.0025) / 2;
              this.$store.state.deliveryFee = deliveryFee;
            });
        })
        .catch(error => {
          alert("Falha ao buscar CEP. Por favor, digite manualmente.");
        });
    }
  }
};
</script>
