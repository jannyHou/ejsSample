module.exports = function(app) {
 var router = app.loopback.Router();
	router.get('/', function(req, res, next) {
		app.models.test.find(function(err, tests) {
			if (err) return next(err);
			res.render('index', {tests: JSON.stringify(tests)});
		});
	});
	router.get('/replaceOrCreate', function(req, res, next) {
		app.models.test.replaceOrCreate({name: 'secondTest'}, function(err, tests) {
			if (err) return next(err);
			res.render('replaceOrCreate', {tests: JSON.stringify(tests)});
		});
	});
  app.use(router);
};
