const _ = require('lodash');

const columns = [
  'name',
  'email',
  'password'
]

const UserModel = (values) => {
  const data = _.pick(values, columns);
  return Object.freeze({
    getUser: () => data,
  })
}

module.exports = UserModel

