GithubExplorer.RepositoryNewissueController = Ember.Controller.extend({
    needs: ["repository"],
    repo: Ember.computed.alias("controllers.repository"),
    actions: {
        submitIssue: function () {
            var title = $("#new-issue-title").val();
            var body = $("#new-issue-body").val();
            //POST issues_url
            var url = this.get("repo").get("issues_url").replace("{/number}", "");
            //Ember.$.post(url, {title: title, body:body}, function(result) {
            //    //success
            //    this.transitionToRoute("issues");
            //    alert("Issue submitted");
            //});
            console.log("Mock Submitted [" + title + "] to Url: " + url);
            console.log(title + "'s Body: " + body);
        }
    }
});
