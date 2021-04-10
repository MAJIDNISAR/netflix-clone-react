import axios from 'axios'
/** Base Url To make Requests */
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default instance
