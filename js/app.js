App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
});

App.IndexController = Ember.Controller.extend({
  greeting: "This is the homepage",
  today: function() {
    return (new Date()).toDateString();
  }.property()
});

App.AboutController = Ember.Controller.extend({
  greeting: "Learn more about us"
});
