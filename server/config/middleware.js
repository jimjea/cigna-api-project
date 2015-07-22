// All middleware and router injections to be placed here

var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  var userRouter = express.Router();

  app.use('/users', userRouter);

  app.get('/*', function(req, res) {
  	res.redirect('/');
  });

  require('../users/userRoutes.js')(userRouter);

};
