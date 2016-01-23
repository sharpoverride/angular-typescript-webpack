var template = require("./dashboard.html");

import controller from "./DashboardController";

export default function dashboard(
		$compile: ng.ICompileService,
		$timeout: ng.ITimeoutService,
		$window: ng.IWindowService
	) {

	return {
		restrict: "E",
		template,
		scope: {},

		bindToController: true,
		controller,
		controllerAs: "ctrl",

		link: function(scope: ng.IScope, elem: Element, attrs: any) {
		}
	};
}

dashboard.$inject = ["$compile", "$timeout", "$window"];
