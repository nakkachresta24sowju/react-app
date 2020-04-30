<<<<<<< HEAD
import usersResponse from "../../fixtures/getUsersResponse.json";
=======
import usersResponse from '../../fixtures/getUsersResponse.json';
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d

class UserFixtureService {
  getUsersAPI = () => {
    return new Promise((resolve, reject) => {
      resolve(usersResponse);
    });
  };
}

export default UserFixtureService;
