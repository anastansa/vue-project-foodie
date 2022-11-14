import { createStore } from 'vuex'
import lang from '@/store/Lang'
import categories from '@/store/Categories'
import promos from '@/store/Promos'
import cart from '@/store/Cart'
import orders from '@/store/Orders'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    lang,
    categories,
    promos,
    cart,
    orders
  }
})
