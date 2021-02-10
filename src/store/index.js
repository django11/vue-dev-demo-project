import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: {
      1: [
        'test1',
        'demo2',
        'tree3',
        'car',
        'bike',
        'dog',
        'cat'
      ],
      2: [
        'xxx',
        'xxx123',
      ]
    }
  },
  getters: {
    getCartItems(state) {
      return state.carts;
    },
  },
  mutations: {
    'MOVE_TO_CART': function (state, data) {
      if (data.to === data.cart) {
        return;
      }
      state.carts[data.cart] = state.carts[data.cart].filter((item) => item !== data.item);
      state.carts[data.to].push(data.item);
    },
    'ADD_TO_CART': function (state, data) {
      state.carts[data.cart].push(data.item);
    },
    'MOVE_ALL_ITEMS': function (state, data) {
      state.carts[data.to].push(...state.carts[data.from]);
      state.carts[data.from] = [];
    }
  },
  actions: {
    moveToCart({commit}, data) {
      commit('MOVE_TO_CART', data);
    },
    addToCart({commit}, data) {
      commit('ADD_TO_CART', data);
    },
    moveAll({commit}, data) {
      commit('MOVE_ALL_ITEMS', data);
    }
  },
  modules: {
  }
})
