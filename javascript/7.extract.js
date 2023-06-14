'use strict'
const tripOriginRef = { originUuid: '123' }
const tripOriginWhole = {
  origin: {
    uuid: '123',
    city: 'Denver',
    state: 'Coloro',
  },
}
const isRef = (trip) => {
  return 'originUuid' in trip
}
const isDraft = (trip) => {
  return 'origin' in trip
}
const result = [tripOriginRef, tripOriginWhole].filter(isDraft)

console.log('result', result)
