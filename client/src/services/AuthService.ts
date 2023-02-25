import axios from '@/lib/axios'

export default class AuthService {
  static async getCurrentUser() {
    try {
      const { data } = await axios.get('/api/user')
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
