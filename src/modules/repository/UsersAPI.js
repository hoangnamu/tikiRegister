import BaseAPI from '../../core/services/BaseAPI';

class UsersAPI {
  async getUsers() {
    let user = await BaseAPI.get('/users');
    return user;
  }
}

export default UsersAPI;
