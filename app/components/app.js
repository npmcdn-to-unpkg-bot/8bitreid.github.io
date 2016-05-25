(function(){
  var app = angular.module('home',[]);

  app.controller('HomeController', function(){
    this.name = content;
  })

  app.controller('PageController', function(){
    this.tab = 1;

    this.selectTab= function(setTab){
      this.tab = setTab || 1;
    };
    this.isSelected= function(checkTab){
      return this.tab === checkTab;
    };
  })

  var content = {
    text: 'Reid Mewborne'
  }

  app.directive('resumePage', function(){
    return{
      restrict: 'E',
      templateUrl: 'resume-page.html',
      controller:function(){
        this.tab = 1;

        this.selectTab= function(setTab){
          this.tab = setTab || 1;
        };
        this.isSelected= function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs:'resumePageCtrl'
    };
  });

  app.directive('homePage', function(){
    return{
      restrict: 'E',
      templateUrl: 'home-page.html',
      controller: function(){
        this.tab = 1;

        this.selectTab= function(setTab){
          this.tab = setTab || 1;
        };
        this.isSelected= function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs:'homePageCtrl'
    }
  });

})();
