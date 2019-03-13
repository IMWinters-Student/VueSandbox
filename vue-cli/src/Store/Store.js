import Vue from 'vue'
import Vuex from 'vuex'
import IsaacIMG from '../assets/Isaac.jpg'

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {
            IsaacImage: IsaacIMG,
            x: 2,
            user: "",
            adventures: [{name: "Twitney", departure: "July 6, 2019"},{name: "Escape the rate Race", departure: "Please God soon!"}]
            
        },
        // example getter is not used in the application
        // return it anywhere in the app with this.$store.getters.Example
        // do not exicute the functuion when called from a vue component, vue will handle that
        // async functons MUST only happen in actions and then call the mutation to chagne the state

        getters: {
            Example: (state) => {
                return state.x * 2;
            },
            getAdventures: state =>{
                return state.adventures
            }
        },
        mutations: {
            incrementX: (state, payload) => {
                state.x += payload
            },
            decrementX: state =>{
                state.x --
            }
        },
        actions: {
            increment: ({commit}, payload) => {
                setTimeout((commit('incrementX'), payload), 1000);
            }
        }
});

