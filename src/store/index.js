import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import rewards from '@/store/rewards'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    rewards: rewards,
  },
  strict: true,
  state: {
    dlVersion: '',
    packageVersion: '',
  },
  getters: {
    getMirai(state) {
      return state.dlVersion
    },
    getFuture(state) {
      return state.packageVersion
    },
    getAllProducts(state) {
      return state.products
    },
    getFilteredList(state, getters) {
      var newList = []
      for (var i = 0; i < getters.getAllProducts.length; i++) {
        var isShow = false
        // this.selectedValueが初期値でなければ（いずれかのoptionが選ばれていれば）
        if (state.selectedValue !== '') {
          // walkと比較して、表示・非表示を決める
          if (state.selectedValue == getters.getAllProducts[i].walk) {
            isShow = true
          } else {
            // walkと一致しなければ次へ
            continue
          }
        }

        // エリアが一致するか
        // 1. show1がチェックされていて、prefが東京
        // 2. show2がチェックされていて、prefが大阪
        // 上記のどちらかを満たせば表示、そうでなければ非表示
        if (
          (state.show1 && getters.getAllProducts[i].pref == 'tokyo') ||
          (state.show2 && getters.getAllProducts[i].pref == 'osaka')
        ) {
          isShow = true
        } else {
          isShow = false
        }

        if (isShow) {
          newList.push(getters.getAllProducts[i])
        }
      }

      return newList
    },
  },
  mutations: {
    toggleShow1Boolean(state) {
      state.show1 = !state.show1
    },
    toggleShow2Boolean(state) {
      state.show2 = !state.show2
    },
    setDlVersion(state, value) {
      state.dlVersion = value
    },
    setPackageVersion(state, value) {
      state.packageVersion = value
    },
  },
  actions: {},
})
