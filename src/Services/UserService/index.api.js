<<<<<<< HEAD
import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

class UserService {
  api;
=======
import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

class UserService {

  api
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d

  constructor() {

    this.api = create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
    });

  }

  getUsersAPI = () => {
<<<<<<< HEAD
    return networkCallWithApisauce(this.api, "users/", {}, apiMethods.get);
  };
=======

    return networkCallWithApisauce(
      this.api,
      'users/', {},
      apiMethods.get
    );
  }

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
}

export default UserService;
