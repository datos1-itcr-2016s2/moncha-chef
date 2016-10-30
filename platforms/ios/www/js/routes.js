angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsMaster.orderList'
      2) Using $state.go programatically:
        $state.go('tabsMaster.orderList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/order.designed-page
      /page1/tab4/order.designed-page
  */
  .state('tabsMaster.orderList', {
    url: '/order.designed-page',
    views: {
      'tab1': {
        templateUrl: 'templates/orderList.html',
        controller: 'orderListCtrl'
      },
      'tab4': {
        templateUrl: 'templates/orderList.html',
        controller: 'orderListCtrl'
      }
    }
  })

  .state('tabsMaster.chat', {
    url: '/chat-page',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsMaster.foodInventory', {
    url: '/inventory-page',
    views: {
      'tab3': {
        templateUrl: 'templates/foodInventory.html',
        controller: 'foodInventoryCtrl'
      }
    }
  })

  .state('tabsMaster', {
    url: '/page1',
    templateUrl: 'templates/tabsMaster.html',
    abstract:true
  })

  .state('chefLogIn', {
    url: '/page6',
    templateUrl: 'templates/chefLogIn.html',
    controller: 'chefLogInCtrl'
  })

  .state('configuration', {
    url: '/config-page',
    templateUrl: 'templates/configuration.html',
    controller: 'configurationCtrl'
  })

  .state('about', {
    url: '/page8',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('tabsMaster.fruitsInventory', {
    url: '/fruits.inv',
    views: {
      'tab3': {
        templateUrl: 'templates/fruitsInventory.html',
        controller: 'fruitsInventoryCtrl'
      }
    }
  })

  .state('tabsMaster.meatsInventory', {
    url: '/meats.inv',
    views: {
      'tab3': {
        templateUrl: 'templates/meatsInventory.html',
        controller: 'meatsInventoryCtrl'
      }
    }
  })

  .state('tabsMaster.vegetablesInventory', {
    url: '/vegetables.inv',
    views: {
      'tab3': {
        templateUrl: 'templates/vegetablesInventory.html',
        controller: 'vegetablesInventoryCtrl'
      }
    }
  })

  .state('tabsMaster.dairyProductsInventory', {
    url: '/dairy.inv',
    views: {
      'tab3': {
        templateUrl: 'templates/dairyProductsInventory.html',
        controller: 'dairyProductsInventoryCtrl'
      }
    }
  })

  .state('tabsMaster.grainsInventory', {
    url: '/grains.inv',
    views: {
      'tab3': {
        templateUrl: 'templates/grainsInventory.html',
        controller: 'grainsInventoryCtrl'
      }
    }
  })

  .state('addProductToINV', {
    url: '/page16',
    templateUrl: 'templates/addProductToINV.html',
    controller: 'addProductToINVCtrl'
  })

  .state('addANewDish', {
    url: '/page9',
    templateUrl: 'templates/addANewDish.html',
    controller: 'addANewDishCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});