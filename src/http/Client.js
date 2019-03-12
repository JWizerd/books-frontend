import axios from "axios";

export default class Client {
  getInstance() {
    if (!this.hasOwnProperty('instance')) {
      let instance = axios.create();

      instance.defaults.baseURL = `http://0.0.0.0:1111/api/${this.getResource()}/`;
      instance.defaults.headers.common['Content-Type'] = 'application/json';

      if (window.localStorage.getItem('userToken') !== null) {
        instance.defaults.headers.common['X-Authorization'] = `Bearer ${window.localStorage.getItem('userToken')}`;
      }

      return instance
    }

    return this.instance
  }

  setInstance($instance) {
    this.instance = $instance;
    return this.instance;
  }

  async show() {
    return await this.getInstance().get('');
  }

  async get(id) {
    return await this.getInstance().get(id.toString());
  }

  async store(payload) {
    return await this.getInstance().post('', payload);
  }

  async update(id, payload) {
    return await this.getInstance().put(id.toString(), payload);
  }

  async destroy(id) {
    return await this.getInstance().delete(id.toString());
  }
}
