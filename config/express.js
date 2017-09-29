let express = require('express');
let bodyParser = require('body-parser');
let load = require('express-load');


module.exports = () => {
    let app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    app.set('view engine', 'pug');
    app.set('views', './app/views');

    app.set('port', 3000);
    app.use(express.static('./public'));

    return app;
};