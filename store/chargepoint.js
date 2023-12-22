import { defineStore } from '@pinia'
export const useChargepointStore = defineStore('chargepointStore', {
    state: () => ({
        chargepoints: '',
        description: ''
    }),
    actions: {
        /**
         *
         * @param {Object} user
         * @return {Promise<void>}
         */
        async fetchChargepoints(user) {
            const chargepoints = await $fetch('https://api.nuxt.com/modules/pinia')


        }
    }
})