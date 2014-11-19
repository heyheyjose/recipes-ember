App.RecipeController = Ember.ObjectController.extend({
	actions: {
		destroy: function () {
			this.get('model').deleteRecord();
			alert('Delete permanently?'); // this is not what i am looking for :(
			this.get('model').save();
			this.transitionToRoute('index');
		}
	}
});