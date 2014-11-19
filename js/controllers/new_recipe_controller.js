App.NewRecipeController = Ember.Controller.extend({
	actions: {
		create: function () {
			var recipeAttributes = this.getProperties('title', 'description', 'category', 'imgUrl', 'ingredients', 'steps');
			var recipe = this.store.createRecord('recipe', recipeAttributes);
			recipe.save();
			this.transitionToRoute('index');
		}
	}
});