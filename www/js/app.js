
angular.module('LastFmApp', ['ionic','controllers','services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

      .state('/', {name: 'artists', url: '/artists', templateUrl: 'templates/artists.html', controller: 'ArtistController'})
      .state('albums', {name: 'albums', url: '/topAlbums/:artist', templateUrl: 'templates/albums.html', controller: 'AlbumController'})
      .state('fans', {name: 'fans', url: '/topFans/:artist', templateUrl: 'templates/fans.html', controller: 'FanController'})
      .state('tracks', {name: 'tracks', url: '/topTracks/:artist', templateUrl: 'templates/tracks.html', controller: 'TrackController'});

        $urlRouterProvider.otherwise('/');


});



