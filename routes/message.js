const router = require('express').Router();
const msgService = require('../services/message');

router.get("/", (req, res, next) => {
  msgService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/:id", (req, res, next) => {
  msgService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post('/', (req, res) => {
  let msg = {
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
    message: {
      date: Date.now(),
      text: req.body.message
    }
  };
  msgService.saveOne(msg, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
})

router.put('/:id', (req, res) => {
  let updatedMsg = {
    date: Date.now(),
    text: req.body.message
  }
  msgService.udpateOne(req.params.id, updatedMsg, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  })
});


router.delete('/:id', (req, res) => {
  msgService.deleteOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;
