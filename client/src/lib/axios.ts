import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json'
  },
  withCredentials: true
})

export default axios
