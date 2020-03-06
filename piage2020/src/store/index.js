import Vue from "vue";
import Vuex from "vuex";
import simplejson  from "simplejson"

Vue.use(Vuex);

export default new Vuex.Store({
  name:oui,
  state: {
    localisations: []
  },

  mutations: {
    LOCAL : (state, localisations) => {
      state.localisations = localisations;
    }
  },
  mounted: {
   
  },
  actions: {
    getLocatisation({commit}) {
      Vue.axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((result) => {
      commit('LOCAL', simplejson(result.data));
      console.log("coucou")
      });
    },

  },
  getters : {
    getAllLocalisations : state => {
      return state.localisations
    },
  },
  modules: {

  }
});

