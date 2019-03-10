import axios from "axios";
import Client from "./Client";

class Book extends Client {
  getResource() {
    return "book";
  }
}
