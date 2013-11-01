var IndexController = Ember.ObjectController.extend({
  hasLoadedOnce: false,
  isReloading: false,
  reloadInterval: 5000,
  actions: {
    waitToReload: function() {
      var controller = this;
      Ember.run.later(function() {
        controller.send('reload');
      }, controller.get('reloadInterval'));
    },
    reload: function() {
      var controller = this;

      controller.set('isReloading', true);

      $.getJSON('http://tobobo.xen.prgmr.com:8888/site_mpi.json').then(function(data) {
        controller.set('content', data);
        controller.set('isReloading', false);
        controller.set('hasLoadedOnce', true);
        controller.send('waitToReload');
      }, function(error) {
        console.log('retrying...');
        Ember.run.later(function() {
          controller.send('reload');
        }, 2000);
      });
    }
  }
});

export default IndexController;
