angular.module('services', ['ngResource'])
    .factory('LastFm',function ($resource) {
        return $resource('http://ws.audioscrobbler.com/2.0/?method=:op&artist=:artist&country=:country&api_key=:key&format=json', {},
            {get: {method: 'GET', params: {key: 'fe77a75f00e2a33dab9cf97b10bb482a'}}});
    });