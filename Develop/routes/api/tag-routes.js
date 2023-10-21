const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagInfo = await Tag.findAll({
      include: [{ 
        model: Product, through: ProductTag, as: 'productTag_products' }]
    })
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }
  
  
  
  
  
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  
  try {
    const tagInfo = await Tag.findByPk(req.params.id, {
      include: [{ 
        model: Product, through: ProductTag, as: 'productTag_products' }]
    })
    if (!tagInfo) {
      res.status(400).json({ message: 'not found with this id' });
      return;
    }
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }
  
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  
  try {
    const tagInfo = await Tag.create(req.body);
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }
  
  
  // create a new tag
});

router.put('/:id', async (req, res) => {
 
 
  try{
    const tagInfo = await Tag.update(req.body, {
      where: { id: req.params.id },
    })
    if (!tagInfo) {
      res.status(404).json({message: 'no tag found'});
    }
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err)
  }
 
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {


  try {
    const tagInfo = await Tag.destroy({
      where: { id: req.params.id},
    })
    if (!tagInfo) {
      res.status(404).json({message: 'no tag found'});
      return;
    }
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;

