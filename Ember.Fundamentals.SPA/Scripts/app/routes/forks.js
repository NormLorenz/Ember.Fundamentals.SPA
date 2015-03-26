GithubExplorer.ForksRoute = Ember.Route.extend({
    model: function () {
        var repo = this.modelFor("repository");
        return Ember.$.getJSON(repo.forks_url);
    }
});
