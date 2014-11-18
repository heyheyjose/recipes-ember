App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'recipes'
});

App.Recipe = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	imgUrl: DS.attr('string'),
	ingredients: DS.attr('string'),
	steps: DS.attr('string')
});

App.Router.map(function () {
	this.route('recipe', { path: 'recipe/:id' });
	this.route('edit_recipe', { path: 'recipe/:id/edit' });
	this.route('new_recipe', { path: '/recipes/new' });
});


// LocalStorage isn't working. SORRY JUSTIN.
setTimeout(function() {
[
{
	id: 1,
	title: 'Banana Bread',
	description: 'The beauty of this banana bread recipe is you don’t need a fancy mixer! A fork to whisk the eggs and a sturdy spoon to mix the batter are all you need.',
	imgUrl: 'http://www.simplyrecipes.com/wp-content/uploads/2006/06/banana-bread-600.jpg',
	ingredients: '2-3 very ripe bananas peeled, 1/3 cup melted butter, 1 cup of sugar (can easily use 3/4 cup or drop it down to 1/2 cup if you want it less sweet), 1 egg, beaten, 1 teaspoon vanilla extract, 1 teaspoon baking soda, Pinch of salt, 1 1/2 cups of all-purpose flour',
	steps: 'step 1, step 2, step 3'
},
{
	id: 2,
	title: 'Lasagna',
	description: 'An amazing lasagna recipe for all your cooking',
	imgUrl: 'http://www.sugarbang.com/storage/lasagna2.jpg',
	ingredients: 'eggs,oil,flour,milk,sugar',
	steps: 'step i, step ii, step iii'
},
{
	id: 3,
	title: 'Cake',
	description: 'Cake recipe for all your cooking',
	imgUrl: 'http://www.finecooking.com/CMS/uploadedimages/Images/Cooking/Articles/Issues_111-120/051120081-01-chocolate-irish-whiskey-cake-recipe_xlg.jpg',
	ingredients: 'water,flour,sugar',
	steps: 'step a, step b, step c'
}
].forEach(function (recipe) {
	App.__container__.lookup('store:main').createRecord('recipe', recipe);
});
}, 1000);

App.IndexRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('recipe');
	}
});

App.RecipeRoute = Ember.Route.extend({
	// model: function (params) {
	// 	return RECIPES.find(function (recipe) {
	// 		return recipe.id === Number(params.id);
	// 	});
	// }
	model: function (params) {
		return this.store.find('recipe', params.id);
	}
});

App.EditRecipeRoute = Ember.Route.extend({
	// model: function (params) {
	// 	return RECIPES.find(function (recipe) {
	// 		return recipe.id === Number(params.id);
	// 	});
	// },
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

App.EditRecipeController = Ember.ObjectController.extend({
	actions: {
		editFormSubmit: function () {
			var attributes = this.getProperties('title', 'description', 'imgUrl');
			this.send('updateRecipe', this.model, attributes);
			return false;
		}
	}
});