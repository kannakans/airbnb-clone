const _ = require('lodash')

const columns = [
  'place',
  'user',
  'checkIn',
  'checkOut',
  'name',
  'phone',
  'price'
];

const BookingModel = (values) => {
  const data = _.pick(values, columns)
};

module.exports = BookingModel;