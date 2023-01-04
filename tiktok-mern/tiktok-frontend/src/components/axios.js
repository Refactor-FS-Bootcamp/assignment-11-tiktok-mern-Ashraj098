import axios from 'axios'

const instance = axios.create({
  // baseURL:"https://tiktok-backend-mern-nabendu.herokuapp.com"
  baseURL:"http://localhost:9000"
})

export default instance