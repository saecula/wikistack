const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

function slugify(title) {
  
  if (!title.length) {
    let result = '';
    for (let i = 0 ; i < 15; i++) {
     let rando = 65 + Math.floor(Math.random() * 58);
     result += String.fromCharCode(rando);
  }
    return result;
  } else {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  } 
}

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
          type: Sequelize.TEXT,
          allowNull: false
      },
    status: Sequelize.ENUM('open', 'closed'),
    },
    {hooks: {
      beforeValidate: (page, options) => {
        page.slug = slugify(page.title);
        console.log(page.slug);
        //return page.slug;
      }
    }
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