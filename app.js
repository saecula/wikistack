const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const { db } = require('./models');
const models = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(layout(''));
})




db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 1337;

const init = async () => {
    await models.User.sync({force: true})
    await models.Page.sync({force: true})

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}
 
init();
// app.listen(PORT, () => {
    //  console.log(`App listening in port ${PORT}`);
    // });
    