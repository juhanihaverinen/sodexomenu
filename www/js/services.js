angular
  .module('sodexomenu.services', [])
  .factory('Menus', function($http) {
    var obj = {};
    obj.getMenus = function(){
      return $http.get('/test/menu-weekly.json');
    }
    return obj;
  });
