App.NewRecipeController = Ember.Controller.extend({
	actions: {
		create: function () {
			if (!this.get('title')) {
				this.set('errors', 'Recipe title cannot be blank');
				return;
			}
			if (!this.get('description')) {
				this.set('errors', 'Description cannot be blank');
				return;
			}
			if (!this.get('ingredients')) {
				this.set('errors', 'Ingredients cannot be blank');
				return;
			}
			if (!this.get('steps')) {
				this.set('errors', 'Steps cannot be blank');
				return;
			}
			
			var recipeAttributes = this.getProperties('title', 'description', 'category', 'imgUrl', 'ingredients', 'steps');
			var recipe = this.store.createRecord('recipe', recipeAttributes);
			recipe.save();
			this.transitionToRoute('index');
		}
	}
});