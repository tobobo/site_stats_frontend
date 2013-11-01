var commaNumeral = Ember.Handlebars.makeBoundHelper(function(value, options) {
  var escaped = Ember.Handlebars.Utils.escapeExpression(value);
  return new Ember.Handlebars.SafeString('<span class="highlight">' + window.numeral(escaped).format('0,0') + '</span>');
});

export default commaNumeral;
