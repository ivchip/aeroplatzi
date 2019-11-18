const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');
const Email = require('../utils/email');
const { mailCreateUser } = require('../utils/emailTemplate')

class UsersService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
    this.emailResponse = new Email();
  }

  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword
    });
    this.emailResponse.sendEmail(mailCreateUser(user));
    return createUserId;
  }

  async getOrCreateUser({ user }) {
    const queriedUser = await this.getUser({ email: user.email });
    if (queriedUser) {
      return queriedUser;
    }
    await this.createUser({ user });
    return await this.getUser({ email: user.email });
  }
}

module.exports = UsersService;
