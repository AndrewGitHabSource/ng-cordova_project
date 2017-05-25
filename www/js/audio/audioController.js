angular.module('starter.controllers')
    .controller('audio', function ($scope) {
        $scope.track = {
            url: '/android_asset/www/audio/rammstein.mp3',
            artist: 'rammstein',
            title: 'rammstein',
            art: ''
        };
    });