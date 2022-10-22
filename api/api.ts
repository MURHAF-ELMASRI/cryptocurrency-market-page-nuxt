import { mande, nuxtWrap } from 'mande'
import { CryptoCurrency } from '~/types/CryptoCurrency'
  
const BASE_URL='https://api.coingecko.com/api/v3'
const fetchPolyfill = process.server ? require('node-fetch') : fetch

const host = mande(BASE_URL, {}, fetchPolyfill)
  

export const api = {
  getAllCryptos: nuxtWrap(host, (api) => api.get<CryptoCurrency[]>('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'))
}

