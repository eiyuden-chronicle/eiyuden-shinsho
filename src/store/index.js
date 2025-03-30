import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import pledges from '@/store/pledges'
import rewards from '@/store/rewards'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    rewards: rewards,
    pledges: pledges,
  },
  strict: true,
  state: {},
  getters: {},
  actions: {},
})
