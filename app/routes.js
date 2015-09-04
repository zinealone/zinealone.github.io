gogo.config(function($routeProvider) {
	
	$routeProvider.when("/home", {
		templateUrl : "authentication/view/Login.html",
		controller : "authenticationController"
	})
	.when("/mainNpa",{
		templateUrl : "shared/view/Welcome.html",
		controller : "commonController"
	})
	.when("/npaTypes",{
		templateUrl : "npaTypes/view/npaTypes.html",
		controller : "npaTypesController"
	})
	.when("/npaBizUnit",{
		templateUrl : "npaBizUnit/view/npaBizUnit.html",
		controller : "npaBizUnitController"
	})
	.when("/npaEntity",{
		templateUrl : "npaEntity/view/npaEntity.html",
		controller : "npaEntityController"
	})
	.when("/npaWorkFlowType/:params",{
		templateUrl : "npaWorkFlowType/view/npaWorkFlowType.html",
		controller : "npaWorkFlowTypeController"
	})
	.when("/editNpaWorkFlowType/:params",{
		templateUrl : "npaWorkFlowType/view/editNpaWorkFlowType.html",
		controller : "editNpaWorkFlowTypeController"
	})
	.when("/createProduct",{
		templateUrl : "product/create/view/createProduct.html",
		controller : "createProductController"
	})
	.when("/searchProducts",{
		templateUrl : "product/searchProducts/view/searchProducts.html",
		controller : "searchProductsController"
	})
	.when("/maintainProduct/:params",{
		templateUrl : "product/create/view/maintainProduct.html",
		controller : "maintainProductController"
	})
	.when("/dashboard",{
		templateUrl : "product/dashboard/view/dashboard.html",
		controller : "dashboardController"
	})
	.otherwise("/login");
	
});



