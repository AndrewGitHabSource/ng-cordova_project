angular.module('starter.controllers')

    .controller('showListPhones', function ($scope, $ionicModal, $timeout, contactService) {

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
            contactService.saveContact($scope.loginData.name, $scope.loginData.phoneNumber, $scope.loginData.address);

            $timeout(function () {

                $scope.closeModal();

                $scope.getAllContacts();

            }, 1000);
        };

        $scope.contacts = [];

        $scope.getAllContacts = function () {
            contactService.loadAllContacts(function (data) {

                $scope.contacts = data;

            });
        };

        $timeout(function () {

            $scope.getAllContacts();

        }, 1000);
    });
