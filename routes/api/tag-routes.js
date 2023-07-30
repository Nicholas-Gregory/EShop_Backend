const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const data = await Tag.findAll({ include: { model: Product } });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Tag.findByPk(req.params.id, { include: { model: Product } });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json("No tag with that ID exists!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
