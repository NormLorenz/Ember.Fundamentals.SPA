GithubExplorer.Router.map(function () {
    this.resource("index", { path: "/" });
    this.resource("table");
    this.resource("user", { path: "/users/:login" }, function () {
        this.resource("repositories");
        this.resource("repository", { path: "repositories/:name" }, function () {
            this.resource("issues");
            this.resource("forks");
            this.resource("commits");
            this.route("newissue", { path: "newissue" });
        });
    });
});
