angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  var $container  = $( '#flip' ),
        $pages    = $container.children().hide();
      
      Modernizr.load({
        test: Modernizr.csstransforms3d && Modernizr.csstransitions,
        yep : ['lib/js/jquery.tmpl.min.js','lib/js/jquery.history.js','lib/js/core.string.js','lib/js/jquery.touchSwipe-1.2.5.js','lib/js/jquery.flips.js'],
        nope: 'lib/css/fallback.css',
        callback : function( url, result, key ) {
          
          if( url === 'lib/css/fallback.css' ) {
            $pages.show();
          }
          else if( url === 'lib/js/jquery.flips.js' ) {
            $container.flips();
          }
      
        }
      });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  var $container  = $( '#flip' ),
        $pages    = $container.children().hide();
      
      Modernizr.load({
        test: Modernizr.csstransforms3d && Modernizr.csstransitions,
        yep : ['lib/js/jquery.tmpl.min.js','lib/js/jquery.history.js','lib/js/core.string.js',
        'lib/js/jquery.touchSwipe-1.2.5.js','lib/js/jquery.flips.js'],
        nope: 'lib/css/fallback.css',
        callback : function( url, result, key ) {
          
          if( url === 'lib/css/fallback.css' ) {
            $pages.show();
          }
          else if( url === 'lib/js/jquery.flips.js' ) {
            $container.flips();
          }
      
        }
      });
});
