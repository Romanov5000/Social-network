import axios from 'axios';


export default class Api {
    instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
        const response = await this.instance.get('auth/me', {withCredentials: true});
        const result = response.data;
        return result;
    }

    postUserFollow = async (id) => {
        const response = await this.instance.post(`follow/${id}`, null, {withCredentials: true, headers: {'API-KEY':'2371da0f-0680-4699-834b-d04359f5bee0'}});
        const result = response.data;
        return result;
    }
    deleteUserFollow = async (id) => {
        const response = await this.instance.delete(`follow/${id}`, {withCredentials: true, headers: {'API-KEY':'2371da0f-0680-4699-834b-d04359f5bee0'}});
        const result = response.data;
        return result;
    }
}