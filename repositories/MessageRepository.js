const Repository = require("./generalRepository");
const Message = require("../models/message");

function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
}

MessageRepository.prototype = new Repository();
MessageRepository.prototype.updateById = function(id, obj, callback) {
  let model = this.model;
  let query = model.update({_id: id} , {
    $set: {
      'message.date': obj.date,
      'message.text': obj.text
    }
  })
  query.exec(callback);
};
MessageRepository.prototype.getTalkedWith = function(id, callback) {
  let model = this.model;
  let query = model.aggregate([
    {$match: {senderId: id}},
    {$group: {_id: null, receiverId : {$addToSet: '$receiverId'}}},
    {$lookup: {
      from: 'users',
      localField: 'receiverId',
      foreignField: '_id',
      as: 'name'
    }},
    {$unwind: "$name"},
]
  )
  query.exec(callback)
}


module.exports = new MessageRepository();