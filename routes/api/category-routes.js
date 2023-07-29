const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({ include: { model: Product } });

    if (data) {
      res.status(200).json(data);
    } 
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, { include: { model: Product } });

    if (data) {
      res.status(200).json(data)
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await Category.create({
      categoryName: req.body.name
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const response = await Category.update({
      categoryName: req.body.name
    }, {
      where: { id: req.params.id }
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const response = await Category.destroy({ 
      where: { id: req.params.id }
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
