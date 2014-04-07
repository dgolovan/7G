/*global sevengeese, Backbone*/

sevengeese.Collections = sevengeese.Collections || {};

(function () {
    'use strict';

    sevengeese.Collections.ReposCollection = Backbone.Collection.extend({

        model: sevengeese.Models.RepoModel,
        url: 'https://api.github.com/users/7geese/repos'

    });

})();
