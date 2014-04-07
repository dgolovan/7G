/*global sevengeese, Backbone*/

sevengeese.Collections = sevengeese.Collections || {};

(function () {
    'use strict';

    sevengeese.Collections.ReposCollection = Backbone.Collection.extend({

        model: sevengeese.Models.RepoModel,
        url: 'https://api.github.com/orgs/7geese/repos',

        parse: function(response) {
        	response = _.map(response, function(resp){
        		return {name: resp.name, forks: resp.forks, url: resp.html_url, created: new Date(resp.created_at).toDateString()};
        	});
        	response = _.sortBy(response, function(resp){
        		return resp.forks * -1;
        	});
        	console.log(response);
		    return response;
		  }

    });

})();
