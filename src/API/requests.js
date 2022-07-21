import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
})

export const Requests = {
    getImages () {
        return instance.get()
        .then(response => {
            return response.data
        })
    },

    getItemInfo (itemID) {
        return instance.get(`/${itemID}`)
        .then(response => {
            return response.data
        })
    }
}
