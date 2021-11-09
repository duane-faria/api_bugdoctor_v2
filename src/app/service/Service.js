module.exports = class Service {

  constructor(repository) {
    this.repository = repository;
  }

  create(data) {
    return this.repository.create(data);
  }

  update(data) {
    return this.repository.update(data);
  }

  findOne(config) {
    return this.repository.findOne(config)
  }

  findAll(config) {
    return this.repository.findAll(config);
  }

  delete(id) {
    return this.repository.delete({ where: { id } });
  }

}
