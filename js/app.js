App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.resource('contacts', function() {
    this.resource('contact', { path: ':slug' });
  });
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

App.ContactsIndexRoute = Ember.Route.extend({
  model: function() {
    return App.CONTACTS;
  }
});

App.ContactRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    return App.CONTACTS.findBy('slug', params.slug);
  }
});

App.CONTACTS = [
  {
    name: 'David',
    title: 'Co-Founder',
    bio: 'I make websites',
    slug: 'david'
  },

  {
    name: 'Jo',
    title: 'Co-Founder',
    bio: 'The bestest ever',
    slug: 'jo'
  }
];
