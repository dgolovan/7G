/*global sevengeese, Backbone*/

sevengeese.Collections = sevengeese.Collections || {};

(function () {
    'use strict';

    sevengeese.Collections.ReposCollection = Backbone.Collection.extend({

        model: sevengeese.Models.RepoModel,
        url: 'https://api.github.com/orgs/7geese/repos',
        
        comparator: function(item){
			 return -1*item.get('forks');
        },
        
        initialize: function() {
        	this.bind('reset', this.onColReset, this );
    	},

    	onColReset: function(collection, options) {
	        _.each(collection.models, function(model){
	        	//console.log(model.get('is_fork'));
	        	if(model.get('is_fork')){
		        	model.fetch({ success: function(model, response, options){
		        		collection.set(model, {remove:false});
		        		collection.sort();
		        	}});
	        	}
	        	return model;
	        });
	        
	    },

    });

})();
