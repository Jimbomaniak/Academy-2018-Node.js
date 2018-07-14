function Repository() {}

Repository.prototype = {getAll, getById, saveObj, deleteById};

function getAll(callback) {
  let model = this.model;
  let query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  let model = this.model;
  let query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

function saveObj(obj, callback) {
  let model = this.model;
  model.create(obj, callback);
}

function deleteById(id, callback) {
  let model = this.model;
  let query = model.deleteOne({
    _id: id
  });
  query.exec(callback);
}


module.exports = Repository;