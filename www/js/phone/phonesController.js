angular.module('starter.controllers')

    .controller('showListPhones', function ($scope, $ionicModal, $timeout, contactService, $ionicPlatform, $cordovaContacts) {

        $scope.loginData = {};

        $ionicModal.fromTemplateUrl('templates/addContacts.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.ShowModalContactsAdd = function () {
            $scope.modal.show();
        };

        $scope.saveContact = function () {
            $cordovaContacts.save({
                "displayName": $scope.loginData.name, "phoneNumbers": [{"value": $scope.loginData.phoneNumber}],
                'addresses': [{'streetAddress': $scope.loginData.address}]
            }).then(function (result) {

                console.log(JSON.stringify(result));

            }, function (error) {

                console.log(error);

            });

            $timeout(function () {
                $scope.closeModal();
                $scope.getAllContacts();
            }, 1000);
        };

        $scope.contacts = [];

        $scope.getAllContacts = function () {
            contactService.loadAllCont(function (data) {
                $scope.contacts = data;
            });
        };

        $timeout(function () {
            $scope.getAllContacts();
        }, 1000);
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });
