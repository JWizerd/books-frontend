import axios from "axios";

export default class Client {
  getClient() {
    let instance = axios.create();

    instance.defaults.baseURL = `http://0.0.0.0:1111/api/${this.getResource()}/`;
    instance.defaults.headers.common['Content-Type'] = 'application/json';

    if (window.localStorage.getItem('userToken') !== null) {
      instance.defaults.headers.common['X-Authorization'] = `Bearer ${window.localStorage.getItem('userToken')}`;
    }

    return instance
  }

  async show() {
    return await this.getClient().get('');
  }

  async get(id) {
    return await this.getClient().get(id);
  }

  async store(payload) {
    return await this.getClient().post('', payload);
  }

  async update(id, payload) {
    return await this.getClient().put(id, payload);
  }

  async destroy(id) {
    return await this.getClient().delete(id.toString());
  }
}
