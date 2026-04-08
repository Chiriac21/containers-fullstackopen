import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

console.log('API base URL:', apiClient.defaults.baseURL)

export default apiClient
