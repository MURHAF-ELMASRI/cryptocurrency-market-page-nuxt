import { defineStore } from "pinia";
import { api } from "~/api/api";
import { CryptoCurrency } from "~/types/CryptoCurrency";
import numberToCommaNumber from "~/util/numberToCommaNumber";

export const useCryptoStore = defineStore("crypto", {
    state: () => ({
        allCrypto: [] as CryptoCurrency[],
        solanaCrypto: [] as CryptoCurrency[],
        nftCrypto: [] as CryptoCurrency[]
    }),
    getters: {
        allCryptoUI(state) {
            return  state.allCrypto.map(x=>({...x,current_price:numberToCommaNumber(x.current_price),market_cap:numberToCommaNumber(x.market_cap),total_volume:numberToCommaNumber(x.total_volume)}))
        },
        solanaCrypto(state) {
            return  state.solanaCrypto.map(x=>({...x,current_price:numberToCommaNumber(x.current_price),market_cap:numberToCommaNumber(x.market_cap),total_volume:numberToCommaNumber(x.total_volume)}))
      } ,  
      nftCryptoGetter(state) {
            return  state.nftCrypto.map(x=>({...x,current_price:numberToCommaNumber(x.current_price),market_cap:numberToCommaNumber(x.market_cap),total_volume:numberToCommaNumber(x.total_volume)}))
      } ,  
    },
    actions: {
        async fetchAllCrypto() {
            this.$state.allCrypto= await api.getAllCryptos()
        },
        async fetchSolanaCrypto() {
            this.$state.solanaCrypto= await api.getSolanaCryptos()
        },
        async fetchNftCrypto() {
            this.$state.nftCrypto= await api.getNftCryptos()
        }
    }
})
