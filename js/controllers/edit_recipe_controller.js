App.EditRecipeController = Ember.ObjectController.extend({
	actions: {
		editFormSubmit: function () {
			var attributes = this.getProperties('title', 'description', 'imgUrl', 'ingredients', 'steps');
			this.send('updateRecipe', this.model, attributes);
			return false;
		},
		destroy: function () {
			if (confirm('Delete permanently?')) {
				this.get('model').deleteRecord();
				this.get('model').save();
				this.transitionToRoute('index');
			}
		}
	}
});