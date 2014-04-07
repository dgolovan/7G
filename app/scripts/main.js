/*global sevengeese, $*/


window.sevengeese = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        // new this.Views.ReposView({
        //     collection: new this.Collections.ReposCollection()
        // });

        var repos = new this.Collections.ReposCollection();
        var reposView = new this.Views.ReposView({collection: repos});
        repos.fetch({reset: true});
        //console.log(reposView);
        $('#repo_list').html(reposView.render().el);
    }
};

$(document).ready(function () {
    'use strict';
    sevengeese.init();
});
