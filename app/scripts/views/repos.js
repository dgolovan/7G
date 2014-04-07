/*global sevengeese, Backbone, JST*/

sevengeese.Views = sevengeese.Views || {};

(function () {
    'use strict';

    sevengeese.Views.ReposView = Backbone.View.extend({

        template: JST['app/scripts/templates/repos.ejs'],

        initialize:function () {
	        this.collection.bind("reset", this.render, this);
    	},

        render: function (eventName) {
		    $(this.el).html(this.template({ repos: this.collection.toJSON() }));	        
	        return this;
	    }

    });

})();
