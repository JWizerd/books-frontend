import axios from "axios";

export default class Client {
  getClient() {
    let instance = axios.create();

    instance.defaults.baseURL = `http://0.0.0.0:1111/api/${this.getResource()}/`;
    instance.defaults.headers.common['Content-Type'] = 'application/json';

    if (window.localStorage.getItem('token') !== null) {
      instance.defaults.headers.common['X-Authorization'] = window.localStorage.getItem('token');
    }

    return instance
  }

  async list() {
    return await this.getClient().get('');
  }

  async get(id) {
    return await this.getClient().get(id);
  }

  async insert(payload) {
    return await this.getClient().post('', payload);
  }

  async updateEndpoint(id, payload) {
    return await this.getClient().post(id, payload);
  }

  async delete(id) {
    return await this.getClient().get(id);
  }
}
