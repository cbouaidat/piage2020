import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    localisations: [],
    headers:["id_piece", "x-piece", "y_piece", "z_piece"]
  },
  mutations: {
    LOCAL : (state, localisations) => {
      console.log(localisations)
      state.localisations = localisations;
    }
  },
  actions: {
    getLocalisation({commit}) {
      console.log("test 2")
      Vue.axios
      .get("http://localhost:10000")
      .then((result) => {
        commit('LOCAL', result.data)
      })
    },

  },
  getters : {
    getAllLocalisations : state => {
      return state.localisations
    },
    getAllHeaders : state => {
      return state.headers
    },
  }
});

