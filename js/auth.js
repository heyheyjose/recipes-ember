App.ApplicationRoute = Ember.Route.extend({
	beforeModel: function (transition) {
		var applicationController = this.controllerFor('application');
		if (localStorage.authToken) {
			this.controllerFor('application').login();
		} else {
			this.controllerFor('application').logout();
		}
	},

	actions: {
		logout: function () {
			this.controllerFor('application').logout();
			delete localStorage.authToken;
			this.transitionTo('login');
		}
	}
});

App.AuthenticatedRoute = Ember.Route.extend({
	beforeModel: function (transition) {
		var applicationController = this.controllerFor('application');
	    if (localStorage.authToken !== App.Firebase.getAuth().token) {
	    	applicationController.set('savedTransition', transition);
	    	this.transitionTo('login');
	    } else {
	    	this.controllerFor('application').login();
	    }
	}
});

App.LoginRoute = Ember.Route.extend({
    actions: {
        login: function () {
            var loginController = this.controllerFor('login');
            var username = loginController.get('username');
            var password = loginController.get('password');
            var that = this;
            App.Firebase.authWithPassword({
                email: username,
                password: password
            }, function (error, authData) {
                console.log(authData);
                if (authData) {
                    localStorage.authToken = authData.token;
                    that.transitionTo('index');
                } else {
                    console.warn(error);
                    loginController.set('error', error.message);
                }
            });
        }
    }
});