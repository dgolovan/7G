/*global sevengeese, Backbone, JST*/

sevengeese.Views = sevengeese.Views || {};

(function () {
    'use strict';

    sevengeese.Views.ReposView = Backbone.View.extend({
    	el: "#repoTable",

        //template: JST['app/scripts/templates/repos.ejs'],

        initialize:function () {
	        //this.collection.bind("reset", this.render, this);
	        this.collection.bind('sort', this.render, this );
    	},

        render: function (eventName) {
        	$(this.el).html("<tr><th>Repo Name</th><th>Forks</th><th>Created</th></tr>");
        	
        	_.each(this.collection.models, function (repo) {
	            $(this.el).append(new sevengeese.Views.RepoView({model:repo}).render().el);
	        }, this);
	        
	        return this;
	    }

    });

    sevengeese.Views.RepoView = Backbone.View.extend({
    	tagName: "tr",

        template: JST['app/scripts/templates/repo.ejs'],

        initialize:function () {
     		this.model.bind("change", this.render, this);
    	},

        render: function (eventName) {
		    $(this.el).html(this.template(this.model.toJSON()));	        
	        return this;
	    }

    });


})();
