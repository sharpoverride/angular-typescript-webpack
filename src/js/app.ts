var app: ng.IModule = angular.module("core", []);

import dashboard from "./dashboard/dashboard";
app.directive("dashboard", dashboard);

app.config(($locationProvider: ng.ILocationProvider) => {
	$locationProvider.html5Mode(true);
});