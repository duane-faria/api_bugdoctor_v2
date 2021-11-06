module.exports = class Repository {
  constructor(repository) {
    this.repository = repository;
  }

  findOne(where) {
    return this.repository.findOne({
      where
    })
  }

  create(data) {
    return this.repository.create(data);
  }

  findAll(config) {
    return this.repository.findAll(config);
  }

  delete(params) {
    return this.repository.destroy(params);
  }
}


