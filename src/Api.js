import axios from 'axios';


export default class Api {
    instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY':'2371da0f-0680-4699-834b-d04359f5bee0'},

    });

    getUsers = async (pageNumber) => {
        const response = (pageNumber !== null) ?
            await this.instance.get(`users?page=${pageNumber}`,{withCredentials: true}) :
            await this.instance.get('users',{withCredentials: true});
        const result = response.data;
        return result;
    }

    getUserProfile = async (id) =>{
        const response = await this.instance.get(`profile/${id}`);
        const result = response.data;
        return result;
    }

    getInitial = async () => {
        const response = await this.instance.get('auth/me');
        const result = response.data;
        return result;
    }
    postLogin = async (email, password, rememberMe) => {
        const response = await this.instance.post('auth/login', {email, password, rememberMe});
        const result = response.data;
        return result;
    }
    deleteLogin = async () => {
        const response = await this.instance.delete('auth/login');
        const result = response.data;
        return result;
    }

    getStatus = async (id) => {
        const response = await this.instance.get(`profile/status/${id}`);
        const result = response.data;
        return result;
    }
    putStatus = async (status) => {
        const response = await this.instance.put('profile/status', {status});
        const result = response.data;
        return result;
    }

    postUserFollow = async (id) => {
        const response = await this.instance.post(`follow/${id}`);
        const result = response.data;
        return result;
    }
    deleteUserFollow = async (id) => {
        const response = await this.instance.delete(`follow/${id}`);
        const result = response.data;
        return result;
    }
}