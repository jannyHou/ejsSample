module.exports = function(app, done) {
  var Test = app.models.test;
  var Game = app.models.game;

  Test.create({name: 'firstTest', replace: 'firstValue'}, function(err, result) {
    console.log(err, result);
    done(null);
  })
}