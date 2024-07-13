import axios from 'axios';

const URL = 'http://127.0.0.1:3000';

const api = {
    fetchAll: async () => {
        return axios.get(`${URL}/all`)
            .then((res) => res.data)
            .catch((err) => err)
    },
    delete: async (id) => {
        return axios.delete(`${URL}/delete/${id}`)
            .then((res) => res.data)
            .catch((err) => err)
    },
    edit: async (id, data) => {
        return axios.put(`${URL}/update/${id}`, data)
            .then((res) => res.data)
            .catch((err) => err)
    }
}
export default api;