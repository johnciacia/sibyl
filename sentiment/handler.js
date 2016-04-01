var sentiment = require('sentiment');

module.exports.handler = function(event, context) {
  return context.done(null, sentiment(event.text));
};
