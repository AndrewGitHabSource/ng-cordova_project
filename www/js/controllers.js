angular.module('starter.controllers', ['ngCordova'])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $cordovaContacts, $ionicPlatform) {
        $scope.title = 'My phone application';
    });