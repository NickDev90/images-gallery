import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
})

export const Requests = {
    getImages () {
        return instance.get(`?albumId=1`)
        .then(response => {
            return response.data
        })
    },

    // getSelected(arr) {
    //     const queryString = arr.map(id => `id=${id}`).join('&');
    //     console.log(queryString);
    //     return instance.get(`?${queryString}`).
    //     then(response => {
    //         return response.data
    //     })
    // },

    getItemInfo (itemID) {
        return instance.get(`/${itemID}`)
        .then(response => {
            return response.data
        })
    }
}
