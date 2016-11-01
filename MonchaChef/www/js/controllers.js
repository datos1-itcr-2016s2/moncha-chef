angular.module('app.controllers', ['ngCordovaOauth','ionic'])

.controller('orderListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseRefProvider,$rootScope) {
    /*  var ref = new Firebase('https://moncha-chef-app.firebaseio.com/');
      var sync = $firebaseRefProvider(ref);
      $scope.chats = sync.$asArray();
      $scope.sendChat = function(chat){
          $scope.chats.$add({
            user: 'Guest',
            message:chat.message
        });
        chat.message = "";
      }*/
}])

.controller('foodInventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chefLogInCtrl', ['$scope','$http', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $cordovaOauth) {
  $scope.login= function(){
     OAuth.initialize('uR4kbKDy8Sa0UwdU3EnhW_bL2d4');
       OAuth.popup('linkedin').done(function(result) {
                  alert (result);
                  result.me().done(function(data) {
                      $http({
                          method: 'POST',
                          url: 'http://moncha.herokuapp.com/api/auth/chef',
                          data: {name:data.name,lid:data.id,avatar:data.avatar}

                        }).then(function successCallback(response) {
                            alert(response);
                            alert("lo mando al server");
                            // this callback will be called asynchronously
                            // when the response is available
                          }, function errorCallback(response) {
                            alert("error al enviarlo al servidor");
                            alert(response);
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                          });
                       });
  })
}



}])

.controller('configurationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('fruitsInventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('meatsInventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('vegetablesInventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('dairyProductsInventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('grainsInventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addProductToINVCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addANewDishCtrl', ['$scope', '$stateParams','MenuService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService) {
   $scope.dish = {steps:[],ingredients:[]};
   MenuService.getIngredients().then(function(res){
      $scope.ingredients =res;
   });
   //$scope.dish.ingredients = $scope.dish.ingredients + [1 ,2 ];
   $scope.addIngredient = function(ingredient) {
      if(ingredient!=undefined){
         if($scope.dish.ingredients.indexOf(ingredient)<0){
            $scope.dish.ingredients.push(ingredient);}
            else{
               alert("The ingredient is all ready in the recipe");
            }}
            else{
               alert("First select an ingredient");
            }

            //$scope.dish.ingredientToAdd = "";
         }
         $scope.addStep = function(stepToAdd) {
            if(stepToAdd.title != undefined && stepToAdd.estimatedTime != undefined && stepToAdd.instructions != undefined){
               if($scope.dish.steps.indexOf(newStep)<0){var newStep={title:stepToAdd.title, estimatedTime:stepToAdd.estimatedTime,instructions:stepToAdd.instructions}
               //alert(newStep);
               $scope.dish.steps.push(newStep);
               $scope.dish.stepToAdd.title="";
               $scope.dish.stepToAdd.instructions="";
               $scope.dish.stepToAdd.estimatedTime="";}
               else {
                  alert("The step is all ready in the recipe")
               }
            }
            else {
               alert("Fill all the inputs")
            }
         }
            $scope.resetDish = function() {
               $scope.dish = {steps:[],ingredients:[]};
               //$scope.dish.ingredientToAdd=" ";
            }


         }])
