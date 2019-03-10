import axios from "axios";

class Client {
  static getClient() {
    return axios.create({
      baseURL: process.env.BOOKS_API,
      timeout: 15000,
      headers: {
        "Authorization: ": "Basic ".process.env.BOOKS_API_SECRET
      }
    });
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
