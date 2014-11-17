App = Ember.Application.create();

App.Router.map(function () {
	this.route('recipe', {path:'recipe/:id'});
	this.route('edit_recipe', {path:'recipe/:id/edit'});
});

var RECIPES = [
{
	id: 1,
	title: 'Banana Bread',
	description: 'The beauty of this banana bread recipe is you don’t need a fancy mixer! A fork to whisk the eggs and a sturdy spoon to mix the batter are all you need.',
	imgUrl: 'http://www.simplyrecipes.com/recipes/banana_bread/',
	ingredients: ['2-3 very ripe bananas, peeled','1/3 cup melted butter','1 cup of sugar (can easily use 3/4 cup, or drop it down to 1/2 cup if you want it less sweet)','1 egg, beaten','1 teaspoon vanilla extract','1 teaspoon baking soda','Pinch of salt','1 1/2 cups of all-purpose flour'],
	steps: ['step 1', 'step 2', 'step 3']
},
{
	id: 2,
	title: 'Lasagna',
	description: 'An amazing recipe for all your cooking',
	imgUrl: 'cooks.com',
	ingredients: ['eggs','oil','flour','milk','sugar'],
	steps: ['step i', 'step ii', 'step iii']
},
{
	id: 3,
	title: 'Cake',
	description: 'An amazing recipe for all your cooking',
	imgUrl: 'amazon.com',
	ingredients: ['water','flour','sugar'],
	steps: ['step a', 'step b', 'step c']
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

App.RecipeImage = Ember.View.extend({
	attrBindings: ['src','alt'],
	src: '../images/banana-bread-600.jpg',
	alt: 'banana bread',
	tagName: 'img'
});