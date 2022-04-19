let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//hompage route
app.get('/',(req, res) => {
    return res.send({
        error: false,
        massage: 'Welcome to RESTful CRUD API with NODEJS, Express, MYSQL',
        written_by: 'Nui Intern',
    })
})

app.listen(3000, () => {
    console.log('Node App is running on port 3000');
})

module.exports = app;
