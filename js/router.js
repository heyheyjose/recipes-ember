App.Router.map(function () {
	this.route('recipe', { path: 'recipe/:id' });
	this.route('edit_recipe', { path: 'recipe/:id/edit' });
	this.route('new_recipe', { path: '/recipes/new' });
	this.route('category', { path: '/recipes' });
	this.route('login', { path: '/login' });
});

App.ApplicationController = Ember.Controller.extend({
	isLoggedIn: false,
    savedTransition: null,

    login: function () {
      this.setProperties({
      	savedTransition: null, isLoggedIn: true
      });
    },

    logout: function () {
      this.set('isLoggedIn', false);
    }
});