import axios from "axios";

export function getList (callback) {
    axios.get('https://api.ratesapi.io/api/latest').then(r => callback(r));
}
