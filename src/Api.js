import axios from 'axios';


export default class Api {
    instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    });

    getUsers = async (pageNumber) => {
        const response = (pageNumber !== null) ?
            await this.instance.get(`users?page=${pageNumber}`) :
            await this.instance.get('users');
        const result = response.data;
        return result;
    }
}