const MessageRepository = require("../repositories/MessageRepository");
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
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    id = ToObjectID(id);
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  saveOne: (msg, callback) => {
    MessageRepository.saveObj(msg, (err, data) => {
      callback(err, data);
    });
  },

  deleteOne: (id, callback) => {
    id = ToObjectID(id);
    MessageRepository.deleteById(id, (err, data) => {
      callback(err, data);
    });
  },

  udpateOne: (id, msg, callback) => {
    id = ToObjectID(id);
    MessageRepository.updateById(id, msg, (err, data) => {
      callback(err, data);
    });
  }
};