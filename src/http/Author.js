import Client from './Client';

export default class Author extends Client {
    getResource() {
        return "author";
    }
}