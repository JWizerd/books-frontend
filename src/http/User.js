import Client from './Client';

export default class User extends Client {
    getResource() {
        return "user";
    }
}