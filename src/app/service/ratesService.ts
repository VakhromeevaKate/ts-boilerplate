import axios from "axios";

export const getList = async () => {
    const a = await axios.get('https://api.ratesapi.io/api/latest');
    console.log(a);
    return a;
};
