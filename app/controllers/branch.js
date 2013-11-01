var BranchController = Ember.ObjectController.extend({
  githubUrl: function() {
    return 'http://github.com/' + this.get('remote') + '/site_mpi/tree/' + this.get('branch');
  }.property('branch', 'remote')
});

export default BranchController;
