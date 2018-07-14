const router = require('express').Router();
const userService = require('../services/user');


router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
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
  userService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});


router.get('/talked/:id', (req, res) => {
  userService.talked(req.params.id, (err, data) => {
    if (!err) {
      data = data.map(user => user.name.name)
      res.send(data)
      // res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
  })



router.post('/', (req, res) => {
  let user = {
    name: req.body.name,
    email: req.body.email
  };
  userService.saveOne(user, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});



router.delete('/:id', (req, res) => {
  userService.deleteOne(req.params.id, (err, data) => {
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
