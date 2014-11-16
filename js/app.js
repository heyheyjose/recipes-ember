App = Ember.Application.create();

App.Router.map(function () {
	this.route('recipe', {path:'recipe/:id'});
	this.route('edit_recipe', {path:'recipe/:id/edit'});
});

var RECIPES = [
{
	id: 1,
	title: 'This is recipe 1',
	description: 'An amazing recipe for all your cooking',
	imgUrl: 'google.com',
	ingredients: ['flour','milk','sugar'],
	steps: ['step 1', 'step 2', 'step 3']
}
];

App.IndexRoute = Ember.Route.extend({
	model: function () {
		return RECIPES;
	}
});

App.RecipeRoute = Ember.Route.extend({
	model: function (params) {
		return RECIPES.find(function (recipe) {
			return recipe.id === Number(params.id);
		});
	}
});

App.EditRecipeRoute = Ember.Route.extend({
	model: function (params) {
		return RECIPES.find(function (recipe) {
			return recipe.id === Number(params.id);
		});
	}
});
