const express = require('express');
const FlightsService = require('../services/flights');

const {
  flight_IdSchema,
  createFlightSchema,
  updateFlightSchema
} = require('../utils/schemas/flights');

const validationHandler = require('../utils/middleware/validationHandler');

function flightsApi(app) {
  const router = express.Router();
  app.use('/api/flights', router);

  const flightsService = new FlightsService();

  router.get(
    '/',
    async function(req, res, next) {
      const { body: search } = req;
      try {
        let query;
        if (search.startDate && search.from && search.to) {
          let dateStart = new Date(search.startDate);
          let endISO = `${dateStart.toISOString().slice(0,10)}T23:59:59.000Z`;
          query = {
            from: search.from,
            to: search.to,
            arrivalDate: {
              '$gte': dateStart.toISOString(),
              '$lt': endISO
            }
          }
          const flightsDeparture = await flightsService.getFlights(query);
          if (search.endDate) {
            let dateStart = new Date(search.endDate);
            let endISO = `${dateStart.toISOString().slice(0,10)}T23:59:59.000Z`;
            query = {
              from: search.to,
              to: search.from,
              arrivalDate: {
                '$gte': dateStart.toISOString(),
                '$lt': endISO
              }
            }
            const flightsReturn = await flightsService.getFlights(query);
            res.status(200).json({
              routes: {
                departure: flightsDeparture,
                return: flightsReturn
              },
              message: 'Flights listed'
            });
          } else {
            res.status(200).json({
              routes: flightsDeparture,
              message: 'Flights listed'
            });
          }
        } else {
          res.status(200).json({
            error: 'Información incompleta'
          });
        }
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:flight_Id',
    validationHandler({ flight_Id: flight_IdSchema }, 'params'),
    async function(req, res, next) {
      const { flight_Id } = req.params;
      try {
        const flight = await flightsService.getFlight({ flight_Id });
        res.status(200).json({
          data: flight,
          message: 'Flight retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createFlightSchema),
    async function(req, res, next) {
      const { body: flight } = req;
      try {
        const createdFlightId = await flightsService.createFlight({ flight });
        res.status(201).json({
          data: createdFlightId,
          message: 'Flight created'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:flight_Id',
    validationHandler({ flight_Id: flight_IdSchema }, 'params'),
    validationHandler(updateFlightSchema),
    async function(req, res, next) {
      const { flight_Id } = req.params;
      const { body: flight } = req;
      try {
        const updatedFlightId = await flightsService.updateFlight({
          flight_Id,
          flight
        });
        res.status(200).json({
          data: updatedFlightId,
          message: 'Flight updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:flight_Id',
    validationHandler({ flight_Id: flight_IdSchema }, 'params'),
    async function(req, res, next) {
      const { flight_Id } = req.params;
      try {
        const deletedflightId = await flightsService.deleteFlight({ flight_Id });
        res.status(200).json({
          data: deletedflightId,
          message: 'Flight deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = flightsApi;
