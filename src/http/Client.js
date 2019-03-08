import axios from 'axios'

class Client {
    resource;

    static list() {
        return axios.get(this.resource)
    }

    static get(id) {
        return axios.get(this.resource + '/' + id)
    }

    static insert(payload) {
        return axios.post(this.resource, payload)
    }

    static updateEndpoint(id, payload) {
        return axios.post(this.resource + '/' + id, payload)
    }

    static delete(id) {
        return axios.get(this.resource + '/' + id)
    }
}

export default Client