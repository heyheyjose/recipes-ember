App.Router.map(function () {
	this.route('recipe', { path: 'recipe/:id' });
	this.route('edit_recipe', { path: 'recipe/:id/edit' });
	this.route('new_recipe', { path: '/recipes/new' });
});