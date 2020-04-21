import { create } from "apisauce";
import { networkCallWithApiSause } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

class UserService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });
  }
  getUsersApi() {
    return networkCallWithApiSause(this.api, "users/", {}, apiMethods.get);
  }
}
export default UserService;
