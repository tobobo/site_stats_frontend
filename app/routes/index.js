var IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.send('reload');
  }
});

export default IndexRoute;
