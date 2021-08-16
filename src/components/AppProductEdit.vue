<template>
   <div>
       <hr>
       <input type="text" placeholder="Product name" v-model="title">
   </div>
</template>

<script>
export default {
    name: 'AppProductEdit',
    computed: {
        // product(){
        //     return this.$store.getters.selectedProduct;
        // }
        title: {
            get(){
                return this.$store.getters.selectedProduct.title;
            },
            set(value){
                this.$store.commit('editProduct', { title: value });
            }
        }
    }
}
</script>