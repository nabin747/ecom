import axios from "axios"

export const ProductList=()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users');
}