import Client from "./Client";

export default class Book extends Client {
  getResource() {
    return "books";
  }
}
