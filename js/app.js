App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Firebase = new Firebase('https://resplendent-inferno-386.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: App.Firebase
});

App.CATEGORIES = [
{
	id: '1',
	name: 'Meat'
},
{
	id: '2',
	name: 'Fancy'
},
{
	id: '3',
	name: 'Dessert'
},
{
	id: '4',
	name: 'Breakfast'
}
];

App.RecipeFormComponent = Ember.Component.extend({
	markedDescription: function () {
		return marked((this.get('recipe.description')) || '');
	}.property('recipe.description')
});