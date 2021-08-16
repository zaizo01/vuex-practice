<template>
  <div>
    <h2>Listado de productos</h2>
    <hr />
    <ul>
      <li :class="{'sold-out': $store.getters.nearlySoldOut(product.id)}"
          @click="selectProduct(product)" 
          v-for="product in products" :key="product.id">
        {{ product.title }} | {{ product.price }}
        <i>{{ product.inventory }} </i>
        <button @click="AddToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: "AppProductList",
  data() {
    return {

    };
  },
  // methods: {
  //   AddToCart(product){
  //     this.$store.dispatch('addProductToCart', product);
  //   },
  //   selectProduct(product){
  //     this.$store.commit('setSelectedProduct', product);
  //   }
  // },
  // computed: {
  //   products(){
  //     // return this.$store.state.products;
  //     return this.$store.getters.productsOnStock;
  //   } 
  // },
  methods: {
    ...mapActions({
      AddToCart: 'addProductToCart',
    }),
    ...mapMutations({
      selectProduct: 'setSelectedProduct',
    })
  },
  computed: {
    ...mapGetters({
      products: 'productsOnStock',
    })
  },
  async created() {
   try {
     await this.$store.dispatch('getProducts');
   } catch (error) {
     console.error(error);
   }
  }
};
</script>

<style scoped>
ul {
  text-align: left;
}

.sold-out {
  background-color: lightpink;
  border: 3px solid tomato;
  padding: 0.3rem;
  margin: 0.1rem;
}
</style>
