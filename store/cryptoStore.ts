import { defineStore } from "pinia";
import { api } from "~/api/api";
import { CryptoCurrency } from "~/types/CryptoCurrency";
import numberToCommaNumber from "~/util/numberToCommaNumber";

export const useCryptoStore = defineStore("crypto", {
    state: () => ({
        allCrypto: [] as CryptoCurrency[]
    }),
    getters: {
        allCryptoUI(state) {
            return  state.allCrypto.map(x=>({...x,current_price:numberToCommaNumber(x.current_price),market_cap:numberToCommaNumber(x.market_cap),total_volume:numberToCommaNumber(x.total_volume)}))
      }  
    },
    actions: {
        async fetchAllCrypto() {
            this.$state.allCrypto= await api.getAllCryptos()
        }
    }
})
