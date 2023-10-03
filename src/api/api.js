import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backform.culture.az/api'
})

export default instance