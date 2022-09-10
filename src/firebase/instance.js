import axios from "axios";

export default axios.create({
    baseURL: 'https://theoremus-2-default-rtdb.europe-west1.firebasedatabase.app/.json'
})