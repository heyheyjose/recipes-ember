App.EditRecipeRoute = App.AuthenticatedRoute.extend({
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