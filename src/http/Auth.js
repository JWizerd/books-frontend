import Client from "./Client";

export default class Auth extends Client {
    getResource() {
        return "auth";
    }

    async signup(payload) {
        return await this.getClient().post('signup', payload);
    }

    async login(payload) {
        return await this.getClient().post('login', payload);
    }

    async getUser() {
        return await this.getClient().get('user');
    }

    async logout() {
        return await this.getClient().get('logout');
    }
}
