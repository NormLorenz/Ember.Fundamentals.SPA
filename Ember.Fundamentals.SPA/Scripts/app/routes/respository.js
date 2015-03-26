GithubExplorer.RepositoryRoute = Ember.Route.extend({
    model: function () {
        var user = this.modelFor("user");
        var url = "https:/api.github.com/repos/" + user.login + "/" + params.name;
        return Ember.$.getJSON(url);
    }
});
