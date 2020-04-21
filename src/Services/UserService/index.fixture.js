import { create } from "apisauce";
import usersResponse from "../../Fixtures/getUsersResponse.json";
import { networkCallWithApiSause } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

class UserService {
  api;
  getUsersApi() {
    return new Promise((resolve, reject) => {
      resolve(usersResponse);
    });
  }
}
export default UserService;
