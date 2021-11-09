module.exports = class Repository {
  constructor(repository) {
    this.repository = repository;
  }

  findOne(obj) {
    let params = {};
    if (!obj.where) {
      params = {
        where: { ...obj }
      }
    } else {
      params = obj;
    }
    return this.repository.findOne(params);
  }

  create(data) {
    return this.repository.create(data);
  }

  update(data) {
    return this.repository.update(data, { where: { id: data.id } });
  }

  findAll(config) {
    return this.repository.findAll(config);
  }

  delete(params) {
    return this.repository.destroy(params);
  }
}


