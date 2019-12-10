import Vue from 'vue'
import Vuex from 'vuex'
import { moviesService } from './../services/MoviesService'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
    state: {
      movies: []
  },

  mutations: {
    setMovies(state, movies) {
      state.movies = movies

    }
  },

  actions: {
    async fetchMovies(context) {
      try {
        const { data } = await moviesService.getAll()
        context.commit('setMovies', data)
        return data
      } catch (error) {} //eslint-disable-line
    }
  }
})

export default store
