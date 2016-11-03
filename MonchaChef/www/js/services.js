angular.module('app.services', [])


.factory('MenuService', ['$http', '$q', 'ServerAPI', function($http, $q, ServerAPI) {
  return {
    getMenu: function() {
      var deferred = $q.defer();
      console.log(ServerAPI.getURL);
      $http.get(ServerAPI.getURL()).then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data);
      });

      return deferred.promise;
    },

    getDish: function(id) {
      var deferred = $q.defer();
      $http.get(ServerAPI.getURL()).then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data[id - 1]);
      });

      return deferred.promise;
    },
    getIngredients: function() {
      var deferred = $q.defer();
      ingredients=["papa", "yuca", "tomillo", "sal" , "pimienta", "salsa de tomate"];
        deferred.resolve(ingredients);


      return deferred.promise;
    },
  };

}])


.service('ServerAPI', [function() {
  return {
    URL: "",
    defined: false,
    checkPlatform: function(tableCode) {
      if (ionic.Platform.isIOS()) {
        this.URL = "http://moncha.herokuapp.com/api/dishes/fake";
      } else if (ionic.Platform.isAndroid()) {
        this.URL = "http://moncha.herokuapp.com/api/dishes/fake";

      } else {
        this.URL = "http://192.168.0.105:8100/api/dishes/fake";
      }
      this.defined = true;
    },

    getURL: function() {
      if (this.defined == false) {
        this.checkPlatform();
      }
      return this.URL;
    }


  }

}])
