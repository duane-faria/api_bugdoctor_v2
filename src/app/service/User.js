const { pick } = require('lodash');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');
const userRepository = require('../repository/User');

class UserService {

  async create(user) {
    const { email } = user;

    const isRegistered = await userRepository.findOne({ email });

    if (isRegistered) {
      throw new Error('E-mail já cadastrado');
    }

    const userRegistered = await userRepository.create(user);

    return pick(userRegistered.dataValues, ['id', 'name', 'email', 'team_id', 'createdAt', 'updatedAt', 'deletedAt'])
  }

  async findUsersByTeam(team_id) {
    return userRepository.findUsersByTeam(team_id);
  }

  async validateEmail(email, registering = true) {
    const user = await userRepository.findOne({
      email,
    });

    if (registering) {
      if (!user) {
        throw new Error('E-mail não encontrado!')
      }

      return user;

    } else {
      if (user) {
        throw new Error('E-mail já cadastrado!')
      }

      return true
    }
  }

  async login(userData) {
    const { email, password } = userData;
    // const user = await userRepository.findOne({
    //   email,
    // });

    // if (!user) {
    //   throw new Error('E-mail não encontrado!')
    // }
    const user = await this.validateEmail(email);

    if (!(await user.checkPassword(password))) {
      throw new Error('Senha incorreta!')
    }

    const userInfo = pick(user.dataValues, ['id', 'name', 'email', 'team_id', 'createdAt', 'updatedAt', 'deletedAt'])

    const token = jwt.sign({ id: userInfo.id, name: userInfo.name, email: userInfo.email, team_id: userInfo.team_id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return {
      ...userInfo,
      token
    }
  }
}

module.exports = new UserService();
