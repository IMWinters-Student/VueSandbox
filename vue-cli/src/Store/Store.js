import Vue from 'vue'
import Vuex from 'vuex'
import IsaacIMG from '../assets/Isaac.jpg'

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {
            IsaacImage: IsaacIMG
        }
});

