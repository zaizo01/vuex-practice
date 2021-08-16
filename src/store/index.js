import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../api/shop.js';
import cart from './cart';
import products from './products';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  state: {
    checkoutError: false,
  },
  mutations: {
    setCheckoutError(state, error){
      state.checkoutError = error;
    },
  },
  actions: {
    checkout({ commit, state }){
      shop.buyProducts(state.cart.cart, () => {
        commit('emptyCart');
        commit('setCheckoutError', false);
      }, () => {
        commit('setCheckoutError', true);
      })
    }
  },
  getters: {},
})
