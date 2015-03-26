using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using JSONAPI.Core;
using JSONAPI.Json;

namespace Ember.Fundamentals.SPA
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            JsonApiFormatter formatter = new JsonApiFormatter();
            formatter.PluralizationService = new PluralizationService();
            GlobalConfiguration.Configuration.Formatters.Add(formatter);
        }
    }
}
