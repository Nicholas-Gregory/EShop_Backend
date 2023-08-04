const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({ include: { model: Product } });

    res.status(200).json(data); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, { include: { model: Product } });

    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json("No Category with that ID exists!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    await Category.create({
      categoryName: req.body.categoryName
    });
    res.status(200).json("Category succesfully created!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Category.update({
      categoryName: req.body.categoryName
    }, {
      where: { id: req.params.id }
    });
    res.status(200).json("Category successfully updated!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const response = await Category.destroy({ 
      where: { id: req.params.id }
    });
    res.status(200).json({ message: "Category successfully deleted!", data: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;
