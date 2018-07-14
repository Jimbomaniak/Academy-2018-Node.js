module.exports = {
  dbname: "chat_api",
  uri: "mongodb://jimboman:admin@ds231315.mlab.com:31315/chat_api",
  opts: {
    auto_reconnect: true,
    useNewUrlParser: true,
    poolSize: 40
  }
};