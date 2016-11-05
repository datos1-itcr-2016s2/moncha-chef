angular.module('app.services', [])


.factory('MenuService', ['$http', '$q', 'ServerAPI', function($http, $q, ServerAPI) {
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXJ2ZXIiLCJhdWQiOiJjbGllbnQiLCJleHAiOjE0NzgyODg0MzMsImp0aSI6IkUwNE56TXVmbVBMbWVpQWpZUDR4MWciLCJpYXQiOjE0NzgyMDIwMzMsIm5iZiI6MTQ3ODIwMTkxMywic3ViIjoib3JkZXJUYWJsZSIsInVzZXJEYXRhIjoie1wibGlkXCI6bnVsbCxcIm5hbWVcIjpcIlRhdm9cIixcImF2YXRhclwiOm51bGwsXCJ0YWJsZVwiOjAsXCJvcmRlclR5cGVcIjpudWxsLFwicm9sZVwiOlwiQ0hFRlwiLFwiaWRcIjowLFwiZmlyZWJhc2VUb2tlblwiOm51bGx9In0.tzfS-nfv6ZdZO8Q0SyqtDE7Fa0nIPJTjN8Fme9T6ArU',
      }
    };
    var deferred = $q.defer();
    $http.get(ServerAPI.getURL()+"/ingredients", config).then(function(res) {
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
