This document describes how to build a Visual Studio 2013 web site that contains:

- An Ember.js SPA application
- Uses Ember-Data
- Uses WebApi 2.2 with CORS
- Uses Entity code first framework
- Uses Optimization/Bundling
- Uses Bootstrap styling
- etc.

## Build a New Site Instructions

- Empty 2013 Project
- Check MVC
- Check API
- Create an empty controller ‘Home’
- Create a view ‘Index’
- NuGet Ember Javascript MVC API
- NuGet Moment.js
- Nuget Bootstrap 3.2.2
- Create an 'app' folder under Scripts
- Create the following folders under 'app'
    - components
    - controllers
    - helpers
    - models
    - routes
    - store
    - templates
    - views
- Build out your Ember.js application using these folders with an app.js file under the app folder
- Copy the ember-template-complier-1.10.0.js file to the Scripts directory

## _Layout.cshtml Header

    <head>
        <meta charset="utf-8" />
        <title>@ViewBag.Title Ember Fundamentals SPA</title>
        <link href="~/Content/Site.css" rel="stylesheet" type="text/css" />
        <link href="~/Content/bootstrap.css" rel="stylesheet" type="text/css" />
        <script src="~/Scripts/modernizr-2.6.2.js"></script>
    </head>

##_Layout.cshtml Body

    <body>

        @RenderBody()

        <script src="~/Scripts/jquery-1.10.2.js"></script>
        <script src="~/Scripts/moment.js"></script>
        <script src="~/Scripts/bootstrap.js"></script>
        <script src="~/Scripts/ember-template-compiler-1.10.0.js"></script>
        <script src="~/Scripts/ember-1.10.0.js"></script>

        @Scripts.Render("~/bundles/app")

        @Scripts.Render("~/bundles/templates")

    </body>

## Include Optimization/Bundles

- Convert project to use bundles
- [Bundles and Optimization Article](http://www.mikesdotnetting.com/article/197/optimising-asp-net-web-pages-sites-bundling-and-minification)
- Nuget Microsoft.AspNet.Web.Optimization
- Nuget HandleBars Compiler/Bundler
- Nuget HTMLBars Compiler/Bundler
- Hook in a new BundleConfig.cs file in the Global.asax.cs

## JSONAPI Pluralizer and JsonMediaTypeFormatter for WebAPI
- Install NuGet JSONAPI.Net Documentation [here](https://github.com/SphtKr/JSONAPI.NET)
- Install Entity framework from NuGet
- Borrow a model (Contact.cs and Context.cs) for this demonstration


