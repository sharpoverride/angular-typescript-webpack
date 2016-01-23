var template = require("./dashboard.html");

import controller from "./DashboardController";

export default function dashboard($compile, $timeout, $window) {
	return {
		restrict: "E",
		template,
		scope: {},

		bindToController: true,
		controller,
		controllerAs: "ctrl",

		link: function(scope, elem, attrs) {
		}
	};
}

dashboard.$inject = ["$compile", "$timeout", "$window"];