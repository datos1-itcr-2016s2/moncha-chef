angular.module('app.controllers', [])

.controller('orderListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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

.controller('chefLogInCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
   $scope.dish = {recipe:[],ingredientsList:[]};
   $scope.stepToAdd = {};
   $scope.dish.prepTime=0;
   MenuService.getIngredients().then(function(res){
      $scope.ingredients = res;
      console.log(res);

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
            if(stepToAdd.title != undefined && stepToAdd.aproxTime != undefined && stepToAdd.description != undefined){
               if($scope.dish.recipe.indexOf(newStep)<0){var newStep={title:stepToAdd.title, aproxTime:stepToAdd.aproxTime,description:stepToAdd.description}
               //alert(newStep);
               $scope.dish.recipe.push(newStep);
               $scope.stepToAdd.title="";
               $scope.stepToAdd.description="";
               $scope.stepToAdd.aproxTime="";}
               else {
                  alert("The step is all ready in the recipe")
               }
            }
            else {
               alert("Fill all the inputs")
            }
         }
         $scope.resetDish = function() {
            $scope.dish = {recipe:[],ingredients:[]};
            //$scope.dish.ingredientToAdd=" ";
         }
         $scope.postDish = function() {
            //alert($scope.dish);
            MenuService.postDish($scope.dish);
         }
         $scope.totalTime = function() {
            var total =0;
            var len = $scope.dish.recipe.length;
            if(len>0){
               for (var i = 0; i < len; i++) {
                  total+=$scope.dish.recipe[i].aproxTime;
               }
            }
            $scope.dish.prepTime = total;
            return $scope.dish.prepTime;
         }


      }])
