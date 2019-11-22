const joi = require('@hapi/joi');

const flight_IdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const flightIdSchema = joi.number().integer();
const flightNumberSchema = joi.string().max(15);
const flightTimeSecondSchema = joi.number().integer();
const flightArrivalDateSchema = joi.date().iso();
const flightDepartureDateSchema = joi.date().iso();
const flightFromSchema = joi.string().max(3);
const flightToSchema = joi.string().max(3);
const flightPriceSchema = joi.number().integer();
const flightArrivalTimeShema = joi.string().max(8);
const flightDepartureTimeShema = joi.string().max(8);
const flightHoursShema = joi.string().max(2);
const flightMinutesShema = joi.string().max(2);
const flightCurrencyShema = joi.string().max(3);
const flightAircraftKindShema = joi.string().max(50);

const createFlightSchema = {
  id: flightIdSchema,
  flightNumber: flightNumberSchema.required(),
  flightTimeSecond: flightTimeSecondSchema.required(),
  arrivalDate: flightArrivalDateSchema.required(),
  departureDate: flightDepartureDateSchema.required(),
  from: flightFromSchema.required(),
  to: flightToSchema.required(),
  price: flightPriceSchema.required(),
  arrivalTime: flightArrivalTimeShema,
  departureTime: flightDepartureTimeShema,
  hours: flightHoursShema,
  minutes: flightMinutesShema,
  currency: flightCurrencyShema.required(),
  aircraftKind: flightAircraftKindShema.required()
};

const updateFlightSchema = {
  id: flightIdSchema,
  flightNumber: flightNumberSchema,
  flightTimeSecond: flightTimeSecondSchema,
  arrivalDate: flightArrivalDateSchema,
  departureDate: flightDepartureDateSchema,
  from: flightFromSchema,
  to: flightToSchema,
  price: flightPriceSchema,
  arrivalTime: flightArrivalTimeShema,
  departureTime: flightDepartureTimeShema,
  hours: flightHoursShema,
  minutes: flightMinutesShema,
  currency: flightCurrencyShema,
  aircraftKind: flightAircraftKindShema
};

module.exports = {
  flight_IdSchema,
  createFlightSchema,
  updateFlightSchema
};
