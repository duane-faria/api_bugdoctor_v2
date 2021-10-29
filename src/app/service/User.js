const userRepository = require('../repository/User');

class UserService {

  async isCodeValid(code) {
    return !!(await userRepository.findOne({
      code
    }));
  }

  async create(user) {
    const { email } = user;

    const isRegistered = await userRepository.findOne({ email })

    if (isRegistered) {
      throw new Error('E-mail já cadastrado');
    }

    userRepository.create(user);
  }
}

module.exports = new UserService();
