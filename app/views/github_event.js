var GithubEventView = Ember.View.extend({
  tagName: 'li',
  avatarUrlDidChange: function() {
    var img;
    img = new Image();
    img.src = this.get('controller.content.actor.avatar_url')
    return img
  }.observes('controller.content.actor.avatar_url'),
  eventText: function() {
    var eventVerb, eventTarget;
    switch (this.get('controller.content.type')){
      case 'DeleteEvent':
        eventVerb = 'deleted ' + this.get('controller.content.payload.ref_type');
        eventTarget =  this.get('controller.payload.ref');
        break;
      case 'PushEvent':
        eventVerb = 'pushed to ';
        eventTarget = this.get('controller.content.payload.ref').split('/').slice(-1)[0];
        break;
      default:
        eventVerb = this.get('controller.content.type') + 'ed';
        eventTarget = ' something';
    }
    return {eventVerb: eventVerb, eventTarget: eventTarget};
  }.property('controller.content.type')
});

export default GithubEventView;
