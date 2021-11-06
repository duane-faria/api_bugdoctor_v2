const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const { get } = require('lodash');
const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
  const authHeader = get(req, 'headers.authorization');

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id, name, email, team_id } = await promisify(jwt.verify)(token, authConfig.secret);
    req.user = { id, name, email, team_id };
    return next();
  } catch (e) {
    return res.status(404).json({ error: e, message: 'Token invalid', catch: true });
  }
};
