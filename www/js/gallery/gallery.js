angular.module('starter.controllers')

    .controller('gallery', function ($scope, $ionicModal, $cordovaImagePicker, $ionicPlatform, $cordovaCamera) {

        $scope.getImageInGallery = function () {

            var options = {
                maximumImagesCount: 10,
                width: 200,
                height: 200,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {

                    $scope.resultImage = results[0];

                }, function (error) {
                    alert(error);
                });
        };

        $scope.getImageInCamera = function () {

            var optionsCamera = {
                quality: 80,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 200,
                targetHeight: 200,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(optionsCamera).then(function (imageData) {

                $scope.resultImage = "data:image/jpeg;base64," + imageData;

            }, function (error) {
                alert(error);
            });

        };

        $scope.deleteImage = function () {

            $scope.resultImage = undefined;

        }

    });
