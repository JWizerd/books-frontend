import axios from "axios";

export default class Client {
  getClient() {
    let instance = axios.create();

    instance.defaults.baseURL = 'http://0.0.0.0:1111/api/';
    instance.defaults.headers.common['Content-Type'] = 'application/json';

    if (window.localStorage.getItem('token') !== null) {
      instance.defaults.headers.common['X-Authorization'] = window.localStorage.getItem('token');
    }

    return instance
  }

  async list() {
    return await this.getClient().get(this.getResource());
  }

  async get(id) {
    return await this.getClient().get(this.getResource() + "/" + id);
  }

  async insert(payload) {
    return await this.getClient().post(this.getResource(), payload);
  }

  async updateEndpoint(id, payload) {
    return await this.getClient().post(this.getResource() + "/" + id, payload);
  }

  async delete(id) {
    return await this.getClient().get(this.getResource() + "/" + id);
  }
}
