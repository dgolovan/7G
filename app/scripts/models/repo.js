/*global sevengeese, Backbone*/

sevengeese.Models = sevengeese.Models || {};

(function () {
    'use strict';

    sevengeese.Models.RepoModel = Backbone.Model.extend({

        url: 'https://api.github.com/repos/7geese/',

        initialize: function() {
            this.url = this.url + this.get('name');
        },

        parse: function(resp, options)  {
            var forks = resp.forks || 0;
            var created = resp.created_at || "";
            if (resp.source){
                forks = resp.source.forks;
                created = resp.source.created_at;
            }
            
            var response = { name: resp.name, 
                             forks: forks, 
                             url: resp.html_url, 
                             created: new Date(created).toDateString() };
            
            return response;
        }
    });

})();
