/*global sevengeese, Backbone, JST*/

sevengeese.Views = sevengeese.Views || {};

(function () {
    'use strict';

    sevengeese.Views.RepoView = Backbone.View.extend({

    	tagName: 'li',
        template: JST['app/scripts/templates/repos.ejs'],

        render:function (eventName) {

	        $(this.el).html(this.template(this.model.toJSON()));
	        
	        return this;
	    },

    });

    sevengeese.Views.ReposView = Backbone.View.extend({

    	tagName: 'ul',
        //template: JST['app/scripts/templates/repos.ejs']

        initialize:function () {
	        this.collection.bind("reset", this.render, this);
	       
    	},

        render: function (eventName) {
	        _.each(this.collection.models, function (repo) {
	        	//console.log(repo);
	            $(this.el).append(new sevengeese.Views.RepoView({model:repo}).render().el);
	        }, this);
	        
	        return this;
	    }

    });

})();
