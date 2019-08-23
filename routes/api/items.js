const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Read an item
router.get('/', (req, res) => {
  Item.find()
  .sort({amount: -1})
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create an item
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    amount: req.body.amount
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;