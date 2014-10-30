angular.module('controllers', [])

    .controller('AlbumController', function($scope, $stateParams, LastFm) {

      $scope.artist = $stateParams.artist;

      $scope.albumsResult = LastFm.get({op: 'artist.gettopalbums', artist: $scope.artist});
    })


    .controller('FanController',function($scope, $stateParams, LastFm) {

      $scope.artist = $stateParams.artist;

      $scope.fansResult = LastFm.get({op: 'artist.gettopfans', artist: $scope.artist});
    })

    .controller('TrackController',function($scope, $stateParams, LastFm) {

      $scope.artist = $stateParams.artist;

      $scope.tracksResult = LastFm.get({op: 'artist.gettoptracks', artist: $scope.artist});
    })


    .controller('Main',function($scope, $window) {
        $scope.goBack = function() {
            $window.location.href = '/';


        };
})

    .controller('ArtistController',function($scope, $location, LastFm) {

      $scope.countries = [

          {name: "Spain"},
          {name: "Japan"},
          {name: "Mexico"},
          {name: "Belgium"},
          {name: "United States"},
          {name: "Denmark"},
          {name: "Chile"},
          {name: "United Kingdom"},
          {name: "France"},
          {name: "Sweden"},
          {name: "Germany"},
          {name: "Greece"},
          {name: "Denmark"},
          {name: "Finland"},
          {name: "Iceland"},
          {name: "India"},
          {name: "Norway"},
          {name: "Portugal"},
          {name: "Italy"},
          {name: "Greece"}

      ];

        $scope.country = $scope.countries[7];
        $scope.TopArtists = function () {

          $location.path('/artists');
        $scope.artistsResult = LastFm.get({op: 'geo.gettopartists', country: $scope.country.name});

          $scope.data = {};
          $scope.data.columns = [{"id":"1","name":"Name"},{"id":"2","name":"listeners"},{"id":"3","name":"Top Albums"},{"id":"4","name":"Top Fans"},{"id":"5","name":"Top Tracks"}];

      };
    });

