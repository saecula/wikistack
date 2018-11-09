const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    title: Sequelize.STRING,
    slug: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true,
      },
      content: Sequelize.TEXT,
      status: Sequelize.ENUM('open', 'closed'),
    },
   });
   
   const User = db.define('users', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
    },
   });
   
   module.exports = { db, Page, User };