import Client from "./Client";

export default class Auth extends Client {
    getResource() {
        return "auth";
    }

    async signup(payload) {
        return await this.getClient().post(this.getResource() + '/signup', payload);
    }

    async login(payload) {
        return await this.getClient().post(this.getResource() + '/login', payload);
    }
}
