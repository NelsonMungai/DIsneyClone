import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key="d9ed1add5a46fab275d285445c75fbac"
// https://api.themoviedb.org/3/trending/all/day?api_key=d9ed1add5a46fab275d285445c75fbac
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

export default{
    getTrendingVideos
}