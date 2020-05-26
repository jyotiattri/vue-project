import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numbers: [1, 2, 3]
    },
    addNumber(newNumber) {
        this.state.numbers.push(newNumber);
    }
});