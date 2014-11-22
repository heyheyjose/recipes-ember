App.Recipe = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),

	markedDescription: function () {
        return marked(this.get('description') || '');
    }.property('description'),

	category: DS.attr('string'),
	imgUrl: DS.attr('string'),
	ingredients: DS.attr('string'),
	steps: DS.attr('string')
});