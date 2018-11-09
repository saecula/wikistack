const express = require('express');
const router = express.Router();

const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res) => {
  res.send('blah');
});


router.post('/', async (req, res, next) => {
  console.log(req.body);

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  try {

    await page.save();
    console.log('page is ', page);
    let slug = page.dataValues.slug;
    res.redirect(`/${slug}`);
  } catch (error) {

    next(error);
  }
});


router.get('/add', (req, res) => {
  res.send(addPage());
});
module.exports = router;
