angular.module('app.services', [])


.factory('MenuService', ['$http', '$q', 'ServerAPI','$rootScope', function($http, $q, ServerAPI,$rootScope) {
  return {
    getMenu: function() {
      var deferred = $q.defer();
      console.log(ServerAPI.getURL);
      $http.get(ServerAPI.getURL()+"/dishes").then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data);
      });

      return deferred.promise;
    },

    getDish: function(id) {
      var deferred = $q.defer();
      $http.get(ServerAPI.getURL()+"/dishes"+id).then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data[id - 1]);
      });

      return deferred.promise;
    },
    getIngredients: function() {
      var config = {headers:  {
        'Authorization': 'Bearer '+$rootScope.token,
      }
    };
    var deferred = $q.defer();
    $http.get(ServerAPI.getURL()+"/ingredients", config).then(function(res) {
      deferred.resolve(res.data);
    });
    return deferred.promise;

  },


  getIng: function(type) {
    var config = {headers:  {
      'Authorization': 'Bearer '+$rootScope.token,
    }
  };
  var deferred = $q.defer();
  $http.get(ServerAPI.getURL()+"/ingredients/type/"+type, config).then(function(res) {
    deferred.resolve(res.data);
  });
  return deferred.promise;

  },



  postDish: function(dishToPost){
    $http.post(ServerAPI.getURL()+"/dishes", dishToPost).success(function(responseData) {
      alert(responseData)
      alert("publicado")
      //do stuff with response
    });
  }
};

}])


.service('ServerAPI', [function() {
  return {
    URL: "",
    defined: false,
    checkPlatform: function(tableCode) {
      if (ionic.Platform.isIOS()) {
        this.URL = "http://moncha.herokuapp.com/api";
      } else if (ionic.Platform.isAndroid()) {
        this.URL = "http://moncha.herokuapp.com/api";

      } else {
        this.URL = "http://localhost:8100/api";
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
