//Option 1

/*app.controller('CustomersController', function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    
    $scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
    $scope.doSort = function(propName) {
       $scope.sortBy = propName;
       $scope.reverse = !$scope.reverse;
    };
});*/

//Option 2

/*(function() {

    angular.module('customersApp')
      .controller('CustomersController', function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    });
    
}());*/

//Option 3

(function () {
    // i can have any nbr of parameters below, depending on the factories and 
    var CustomersController = function($scope, customersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        
        function init () {
            
            $scope.customers = customersFactory.getCustomers();
        };
        
        // init will fire only ones when this controller instantiates for the first time
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    // minification avoidance boiler plate code, just add all the variables used in the controller function
    // definition
    CustomersController.$inject = ['$scope','customersFactory'];
    
    console.log('not the one with as');
    
    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());