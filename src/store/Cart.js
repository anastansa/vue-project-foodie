let cartItems = window.localStorage.getItem('cartItems');
let cartCount = window.localStorage.getItem('cartCount');

const cart = {
  namespaced: true,
  state: {
    cart: cartItems ? JSON.parse(cartItems) : [],
    total: cartCount ? Number(cartCount) : 0,
  },
  mutations: {
    SET_CART (state, payload) {
      if (state.cart.length) {
        let found = false

        state.cart.map(item => {
          if (payload.id === item.id) {
            found = true
            item.quantity++
            state.total += payload.price
          }
        })
        if (!found) {
          state.cart.push(payload)
          payload.quantity++
          state.total += payload.price
        }
      } else {
        state.cart.push(payload)
        payload.quantity++
        state.total = payload.price
      }
    },
    REMOVE_FROM_CART(state, params) {
      state.cart.splice(params.index, 1)
      let sum = params.item.price * params.item.quantity
      state.total -= sum
      params.item.quantity = 0
    },
    INCREASE(state, params) {
      state.cart[params.index].quantity++
      state.total += params.item.price
    },
    DECREASE(state, params) {
      if(state.cart[params.index].quantity > 1) {
        state.cart[params.index].quantity--
        state.total -= params.item.price
      }
    },
    SAVE_CART(state) {
      window.localStorage.setItem('cartItems', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', JSON.stringify(state.total));
    },
    CLEAR_CART(state) {
      state.cart = []
      state.total = 0
    }
  },
  actions: {
    addToCart ({ commit }, payload) {
      commit('SET_CART', payload)
      commit('SAVE_CART')
    },
    deleteFromCart ({ commit }, payload) {
      commit('REMOVE_FROM_CART', payload)
      commit('SAVE_CART')
    },
    increaseCartItem ({ commit }, payload) {
      commit('INCREASE', payload)
      commit('SAVE_CART')
    },
    decreaseCartItem ({ commit }, payload) {
      commit('DECREASE', payload)
      commit('SAVE_CART')
    },
    deleteCart({ commit }) {
      commit('CLEAR_CART')
      commit('SAVE_CART')
    }
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getTotal(state) {
      return state.total
    }
  }
}

export default cart
