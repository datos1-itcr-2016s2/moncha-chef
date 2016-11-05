angular.module('app.controllers', ['ngCordovaOauth','ionic'])

.controller('orderListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chatCtrl', ['$scope', '$stateParams','$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams,$rootScope) {
  $scope.chats = [];

FCMPlugin.onNotification(function(data){
    if (data.from == "/topics/chat") {
      $scope.$apply(function(){
        $scope.chats.push({
          avatar:data.avatar,
          user:"Chef "+data.name,
          messages:data.notification.body});
      });
    }
  });

  $scope.prueba= function(messages){
    $scope.chats.push({avatar:"https:media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjsAAAAJGMzNjk0MTRiLWYzNzMtNDY3OS05Zjk3LTA3Y2Y2MjBhMDExYw.jpg",
    user:"Daniel Castro",
    messages:messages});
    $scope.chat.message = "";
}}
])

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

.controller('chefLogInCtrl', ['$scope','$http', '$stateParams','$state','$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state, $rootScope, $cordovaOauth) {
  $scope.login= function(){
      FCMPlugin.getToken(
        function(token){
          $rootScope.fcm = token;
          FCMPlugin.subscribeToTopic('chat');
          FCMPlugin.onNotification(function(data){

            if (data.from != "/topics/chat") {
              navigator.notification.alert(data.notification.body), function(){j}, data.notification.title, ("Ok");
            }

          });
        },
        function(err){
          alert('Error while registering push notifications: ' + err);
        }
      )
     OAuth.initialize('uR4kbKDy8Sa0UwdU3EnhW_bL2d4');
       OAuth.popup('linkedin').done(function(result) {
                  alert (result);
                  result.me().done(function(data) {
                      $http({
                          method: 'POST',
                          url: 'http://moncha.herokuapp.com/api/auth/chef',
                          data: {name:data.name,lid:data.id,avatar:data.avatar,firebaseToken:$rootScope.fcm}

                        }).then(function successCallback(response) {
                            if (response.data.length == 0) {
                              alert("An error occured while logging in");
                            } else {
                              $rootScope.token = response.data;
                              $state.go('tabsMaster.chat');
                            }
                            alert("lo mando al server");
                            // this callback will be called asynchronously
                            // when the response is available
                          }, function errorCallback(response) {
                            alert("An error occured while logging in");
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
   $scope.dish = {recipe:[],ingredientsList:[]};
   $scope.stepToAdd = {};
   $scope.dish.prepTime=0;
   $scope.newIngredient={}
   MenuService.getIngredients().then(function(res){
      $scope.ingredients = res;
      console.log(res);

   });
   //$scope.dish.ingredients = $scope.dish.ingredients + [1 ,2 ];
   $scope.addIngredient = function() {
      if($scope.newIngredient.name!=undefined || $scope.newIngredient.quantity!=undefined ){
         var ingredient = {"name":$scope.newIngredient.name, "quantity":$scope.newIngredient.quantity}
         if($scope.dish.ingredientsList.indexOf(ingredient)<0){
            $scope.dish.ingredientsList.push(ingredient);
            //alert(ingredient.name, ingredient.quantity);

         }
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
