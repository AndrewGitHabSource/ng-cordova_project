angular.module('starter.controllers')

    .controller('showListPhones', function ($scope, $ionicModal, $timeout, contactService, $cordovaImagePicker) {

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

        $scope.loadPhoto = function () {
            var options = {
                maximumImagesCount: 10,
                width: 28,
                height: 28,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {

                    $scope.resultImage = results[0];

                }, function (error) {

                    alert(error);

                });
        };

        /* save contact on phone */
        $scope.saveContact = function () {
            contactService.saveContact($scope.loginData.name, $scope.loginData.phoneNumber, $scope.loginData.address, $scope.resultImage);

            $timeout(function () {

                $scope.closeModal();

                $scope.getAllContacts();

            }, 1000);
        };

        $scope.contacts = [];

        /* load all contacts */
        $scope.getAllContacts = function () {
            contactService.loadAllContacts(function (data) {

                $scope.contacts = data;

            });
        };

        $timeout(function () {

            $scope.getAllContacts();

        }, 1000);
    });
