/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputId: '',
        isAuth: false,
    },
    getters: {
        getInputId(state) {
            return state.inputId
        },
        getIsAuth(state) {
            return state.isAuth
        }
    },
    mutations: {
        setInputId(state, payload) {
            state.inputId = payload
        },
         setIsAuth(state, payload) {
            state.isAuth = payload
         }
    },
    actions: {
        async getId({state, commit}) {
           await fetch('https://track-api.leadhit.io/client/test_auth', {
                method: 'GET',
                headers: {
                    'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                    'Leadhit-Site-Id': state.inputId
                }
            }).then(res => {
                if(res.status === 200) {
                    res.json().then(result => {
                        if(result.message && result.message === 'ok') {
                            localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3')
                            commit('setIsAuth', true)
                        }
                    })
                }
            })
        }
    },
});