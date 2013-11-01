import moment from 'moment';
var dateFromNow = Ember.Handlebars.makeBoundHelper(function(value, options) {
  return new Ember.Handlebars.SafeString(window.moment(value).fromNow());
});
console.log('date from now js');

export default dateFromNow;
