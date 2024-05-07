const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }] // include its associated Products
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }] // include its associated Products
    });
    if (!categoryData) {
      res.status(400).json({
        message: 'No category found with that id!'
      });
      return;
    } else {
      res.status(200).json(categoryData);
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(200).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(400).json({ message: 'No category found matching the id. Choose another id.' });
      return
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!categoryData){
      res.status(400).json({ message: 'No category found matching the id. Choose another id' });
      return;
    } else {
      res.status(200).json({ message: 'Category deleted!'});
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
