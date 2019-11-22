const MongoLib = require('../lib/mongo');

class FlightsService {
  constructor() {
    this.collection = 'flights';
    this.mongoDB = new MongoLib();
  }

  async getFlights(query) {
    const flights = await this.mongoDB.getAll(this.collection, query);
    return flights || [];
  }

  async getFlight({ flightId }) {
    const flight = await this.mongoDB.get(this.collection, flightId);
    return flight || {};
  }

  async createFlight({ flight }) {
    const createFlightId = await this.mongoDB.create(this.collection, flight);
    return createFlightId;
  }

  async updateFlight({ flightId, flight } = {}) {
    const updatedFlightId = await this.mongoDB.update(
      this.collection,
      flightId,
      flight
    );
    return updatedFlightId;
  }

  async deleteFlight({ flightId }) {
    const deletedFlightId = await this.mongoDB.delete(this.collection, flightId);
    return deletedFlightId;
  }
}

module.exports = FlightsService;