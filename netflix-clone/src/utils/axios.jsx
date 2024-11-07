import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export default instance;


//https://api.themoviedb.org/3/discover/tv?api_key=16712cd087af1b2f2b2a5228e1785167&with_networks=213