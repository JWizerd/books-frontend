import axios from "axios";

class Client {
  static getClient() {
    let instance = axios.create();

    instance.defaults.baseURL = process.env.BOOKS_API;
    instance.defaults.header.common['Content-Type'] = 'application/json';

    if (window.localStorage.getItem('token')) {
      instance.defaults.header.common['X-Authorization'] = window.localStorage.getItem('token');
    }
  }
  static list() {
    return this.getClient().get(this.getResource());
  }

  static get(id) {
    return this.getClient().get(this.getResource() + "/" + id);
  }

  static insert(payload) {
    return this.getClient().post(this.getResource(), payload);
  }

  static updateEndpoint(id, payload) {
    return this.getClient().post(this.getResource() + "/" + id, payload);
  }

  static delete(id) {
    return this.getClient().get(this.getResource() + "/" + id);
  }
}

export default Client;
