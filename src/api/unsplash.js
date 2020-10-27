import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: "Client-ID HfLdqFMn-Lv9gx1jutrtZqVkHspDxWBX_C9bbHsyDYo",
  },
});