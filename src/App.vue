<template>
  <div id="app">
    <AppProductList />
    <AppShoppingCard />
    <AppProductEdit />
  </div>
</template>

<script>
import AppProductList from "./components/AppProductList.vue";
import AppShoppingCard  from "./components/AppShoppingCard.vue";
import AppProductEdit  from "./components/AppProductEdit.vue";
export default {
  name: "app",
  components: {
    AppProductList,
    AppShoppingCard,
    AppProductEdit,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#app > * {
  flex-basis: 49%;
}

#app div:last-of-type {
  flex-basis: 100%;
}

</style>