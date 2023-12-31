import axios from "axios";

const API = axios.create({ baseURL: 'https://bio-serverside.vercel.app' });

/*
    API.interceptors.request.use((request) => {
        if (localStorage.getItem('profile')) {
            request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))['token']}`
        }

        return request
    })
 */

export const signin = (userInfo) => API.post("/user/signin", userInfo);
export const signup = (userInfo) => API.post("/user/signup", userInfo);

export const getProducts = () => API.get(`/product/getProducts`);
export const getProductById = (id_product) => API.get(`/product/getProductById/${id_product}`);
export const publishProduct = (productInfo) => API.post("/product/publishProduct", productInfo);

export const changeUserInfo = (userInfo) => API.patch("/user/changeUserInfo", userInfo);