const _ = require('lodash');

const columns = [
  'owner',
  'title',
  'address',
  'photos',
  'descriotion',
  'perks',
  'extraInfo',
  'checkIn',
  'checkOut',
  'maxGuests',
  'price',
]

const PlaceModel = (values) => {
  const data = _.pick(values, columns);
  return Object.freeze({
    getPlace: () => data,
  })
}

module.exports = PlaceModel;