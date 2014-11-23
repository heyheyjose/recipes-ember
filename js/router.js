App.Router.map(function () {
	this.route('recipe', { path: 'recipe/:id' }, function () {
		this.route('new_comment');
	});
	this.route('edit_recipe', { path: 'recipe/:id/edit' });
	this.route('new_recipe', { path: '/recipes/new' });
	this.route('category', { path: '/categories' });
	this.route('login', { path: '/login' });
});