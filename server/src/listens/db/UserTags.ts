import MongoDB from 'server/listens/db/MongoDB';

export default class UserTags {
  collection: any;
  constructor(dbConnection) {
    this.collection = MongoDB.getCollection(dbConnection, UserTags.name);
    return this;
  }

  getSchema(params = {}) {
    return new this.collection(params);
  }

  find(condition, selector, option) {
    return new Promise((resolve) => {
      this.collection.find(condition, selector, option, (error, response) => {
        if (error) console.warn(error);
        resolve({ error, response });
      });
    });
  }

  findOne(condition = {}) {
    return new Promise((resolve) => {
      this.collection.findOne(condition, (error, response) => {
        if (error) console.warn(error);
        resolve({ error, response });
      });
    });
  }

  save(set = {}, option = {}) {
    return new Promise((resolve) => {
      const post = new this.collection(set);
      post.save((error, response) => {
        if (error) console.warn(error);
        resolve({ response, error });
      });
    });
  }

  update(condition = {}, set = {}, option = {}) {
    return new Promise((resolve) => {
      this.collection.updateMany(condition, set, option, (error, response) => {
        if (error) console.warn(error);
        resolve({ response, error });
      });
    });
  }

  remove(condition) {
    return new Promise((resolve) => {
      this.collection.deleteMany(condition, (error, response) => {
        if (error) console.warn(error);
        resolve({ response, error });
      });
    });
  }

  removeAll() {
    return new Promise((resolve) => {
      this.collection.deleteMany({}, (error, response) => {
        if (error) console.warn(error);
        resolve({ response, error });
      });
    });
  }
}
