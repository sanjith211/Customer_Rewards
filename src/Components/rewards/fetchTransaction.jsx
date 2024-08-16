import axios from "axios";

export const fetchTransaction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get('/data/transactions.json')
                .then(response => {
                    console.log(response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    console.log('Error Fetching Transactions:', error);
                    reject(error)
                })
        }, 1000)
    })
}
