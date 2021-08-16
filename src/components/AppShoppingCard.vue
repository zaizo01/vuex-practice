<template>
    <div>
        <h2>Carrito</h2>
        <hr>
        <ul>
            <li v-for="(item, $index) in cartItems" :key="item.id">
                {{ item.title }}
                {{ item.quantity }}
                <button @click="removeItem($index)">X</button>
            </li>
        </ul>
        <button v-if="cartItems.length" @click="Checkout">Checkout</button>
        <hr>
        <h3>Total: {{ cartTotal || 0 }}</h3>
        <div v-if="$store.state.checkoutError">
            <p>Error procesando los productos...</p>
        </div>
    </div>
</template>

<script>
import { currency } from '@/utils/currency.js';
export default {
    name: 'AppShoppingCard',
    computed: {
        cartItems(){
            return this.$store.getters.productOnCart;
        },
        cartTotal(){
            return currency(this.$store.getters.cartTotal);
        }
    },
    methods: {
        removeItem(index){
           this.$store.dispatch('removeProductFromCart', index);
        },
        Checkout(){
            this.$store.dispatch('checkout');
        }
    }
}
</script>
<style scoped>
ul {
  text-align: left;
}
</style>