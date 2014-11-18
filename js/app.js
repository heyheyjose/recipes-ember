App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase('https://resplendent-inferno-386.firebaseio.com/')
});

App.CATEGORIES = [
{
	id: '1',
	name: 'Meat'
},
{
	id: '1',
	name: 'Fancy'
},
{
	id: '1',
	name: 'Dessert'
},
{
	id: '1',
	name: 'Breakfast'
}
];

App.Recipe = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	category: DS.attr('string'),
	imgUrl: DS.attr('string'),
	ingredients: DS.attr('string'),
	steps: DS.attr('string')
});

App.Router.map(function () {
	this.route('recipe', { path: 'recipe/:id' });
	this.route('edit_recipe', { path: 'recipe/:id/edit' });
	this.route('new_recipe', { path: '/recipes/new' });
});



App.IndexRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('recipe');
	}
});

App.RecipeRoute = Ember.Route.extend({
	model: function (params) {
		return this.store.find('recipe', params.id);
	}
});

App.EditRecipeRoute = Ember.Route.extend({
	model: function (params) {
		return this.store.find('recipe', params.id);
	},
	actions: {
		updateRecipe: function (model, attributes) {
			model.setProperties(attributes);
			model.save();
			this.transitionTo('recipe', model);
			return false;
		}
	}
});