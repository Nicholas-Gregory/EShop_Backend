const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const data = await Tag.findAll({ include: { model: Product } });
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
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
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await Tag.create({
      tagName: req.body.tagName
    });

    res.status(200).json({ message: "Tag created successfully!", data: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
