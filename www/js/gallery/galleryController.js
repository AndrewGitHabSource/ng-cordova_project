angular.module('starter.controllers')

    .controller('gallery', function ($scope, $cordovaImagePicker, galleryService) {

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
            galleryService.loadPictureFromCamera(function (imageData) {

                $scope.resultImage = "data:image/jpeg;base64," + imageData;

            });
        };

        $scope.deleteImage = function () {

            $scope.resultImage = undefined;

        }

    });
