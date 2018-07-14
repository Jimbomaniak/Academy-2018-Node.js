const UserRepository = require("../repositories/UserRepository");
const MesseageRepository = require("../repositories/MessageRepository");
const ObjectId = require('mongoose').Types.ObjectId

const ToObjectID = (id) => {
	try {
		return ObjectId(id)
	} catch(err) {
		throw new Error('id must be in hex format!')
	}
}

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    id = ToObjectID(id);
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  saveOne: (user, callback) => {
    UserRepository.saveObj(user, (err, data) => {
      callback(err, data);
    });
  },

  deleteOne: (id, callback) => {
    id = ToObjectID(id);
    UserRepository.deleteById(id, (err, data) => {
      callback(err, data);
    });
  },

  talked: (id, callback) => {
    id = ToObjectID(id);
    MesseageRepository.getTalkedWith(id, (err, data) => {
      callback(err, data);
    });
  }
};


