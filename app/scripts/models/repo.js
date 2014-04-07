/*global sevengeese, Backbone*/

sevengeese.Models = sevengeese.Models || {};

(function () {
    'use strict';

    sevengeese.Models.RepoModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
