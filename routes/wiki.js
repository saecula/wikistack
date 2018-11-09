const express = require('express');
const router = express.Router();

const { Page } = require('../models');
const { addPage } = require('../views');
const { wikipage } = require('../views');

router.get('/', (req, res) => {
  res.send('blah');
});

router.post('/', async (req, res, next) => {
  console.log(req.body);

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await page.save();
    console.log('page is ', page);
    let slug = page.dataValues.slug;
    res.redirect(`/wiki/${slug}`);
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res) => {
  const findSlug = await Page.findOne({ where: { slug: req.params.slug } });
  console.log(findSlug);
  // wikipage(findSlug, findSlug.)
  res.json(findSlug);
  // res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
