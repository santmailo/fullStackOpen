import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl);
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
}

const update =  (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
}

let val = {getAll, create, update};
export default val;