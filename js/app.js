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