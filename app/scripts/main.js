/*global sevengeese, $*/


window.sevengeese = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        var repos = new this.Collections.ReposCollection();
        var reposView = new this.Views.ReposView({collection: repos});
        repos.fetch({reset: true});
        $('#repo_list').html(reposView.render().el);
    }
};

$(document).ready(function () {
    'use strict';
    sevengeese.init();
});
